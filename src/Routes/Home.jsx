//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import Card from "../Components/Card";
import { useDentistStates } from "../utils/Context";

const Home = () => {
  const { state } = useDentistStates();

  return (
    <main className={`flex flex-col justify-center px-[20%] ${state.theme === "dark" ? "bg-slate-800 text-white" : "bg-white text-black"}`}>
      <h1 className="text-2xl font-bold mb-6 p-4">Home</h1>
      <div className="flex flex-wrap justify-center gap-8 pb-8">
        {/* Aqui deberias renderizar las cards */}
        {state.list.map((dentist) => (
          <Card key={dentist.id} {...dentist} theme={state.theme}/>
        ))}
      </div>
    </main>
  );
};

export default Home;
