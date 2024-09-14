import Card from "../Components/Card";
import { useDentistStates } from "../utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useDentistStates();
  return (
    <div className={`flex flex-col justify-center px-[20%] ${state.theme === "dark" ? "bg-slate-800 text-white" : "bg-white text-black"}`}>
      <h1 className="text-2xl font-bold mb-6 p-4">Dentists Favs</h1>
      <div className="flex flex-wrap justify-center gap-8 pb-8">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((dentist) => (
          <Card key={dentist.id} {...dentist} theme={state.theme} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
