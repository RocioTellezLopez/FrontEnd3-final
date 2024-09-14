import { Link } from "react-router-dom";
import ButtonTheme from "./ButtonTheme";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav className="bg-rose-700 flex flex-row items-center justify-around w-full">
      <div>
        <h1 className="font-medium text-2xl mx-8 text-white">
          <Link to={"/"} className="text-white hover:text-white"><span className="text-rose-400 font-bold ">D</span>H Odonto</Link>
        </h1>
      </div>
      <div className="flex items-center mr-8 space-x-8">
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link to={"/"} className="hover:text-rose-300 font-medium text-white hover:underline hover:underline-offset-8 ">
          Home
        </Link>
        <Link to={"/contact"} className="hover:text-rose-300 font-medium text-white hover:underline hover:underline-offset-8">
          Contact
        </Link>
        <Link to={"favs"} className="hover:text-rose-300 font-medium text-white hover:underline hover:underline-offset-8">
          Favs
        </Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <ButtonTheme />
      </div>
    </nav>
  );
};

export default Navbar;
