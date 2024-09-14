import Form from "../Components/Form";
import { useDentistStates } from "../utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useDentistStates();

  return (
    <div className={`flex flex-col items-center py-6 h-[100%] ${state.theme === "dark" ? "bg-slate-800 text-white" : "bg-white"}`}>
      <h2 className="text-2xl font-bold mb-6 p-4">Want to know more?</h2>
      <p className="text-md font-semibold text-center">Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
