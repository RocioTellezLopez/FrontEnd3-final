import { useDentistStates } from "../utils/Context";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const { state, dispatch } = useDentistStates();

  const handleChange = (e) => {
    dispatch({
      type: "SET_FORM_DATA",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email } = state.formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length <= 5 || !emailRegex.test(email)) {
      dispatch({
        type: "SET_FORM_ERROR",
        payload: "Por favor verifique su información nuevamente",
      });
      dispatch({ type: "SET_FORM_SUCCESS", payload: null });
    } else {
      console.log("Datos enviados:", state.formData);
      dispatch({
        type: "SET_FORM_SUCCESS",
        payload: `Gracias ${name}, te contactaremos cuando antes vía mail`,
      });
      dispatch({ type: "SET_FORM_ERROR", payload: null });
      setTimeout(() => {
        dispatch({ type: "RESET_FORM" });
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between p-8 w-full space-y-20">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={state.formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-rose-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-rose-500"
        />

        <button
          type="submit"
          className="bg-rose-600 hover:bg-rose-400 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
        >
          Send
        </button>
      </form>
      {state.formError && (
        <p className="text-rose-700 mt-4 text-center font-bold">
          {state.formError}
        </p>
      )}
      {state.formSuccess && (
        <p className="text-green-600  text-center font-bold">
          {state.formSuccess}
        </p>
      )}
    </div>
  );
};

export default Form;
