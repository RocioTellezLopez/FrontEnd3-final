import { Link } from "react-router-dom";
import ButtonAddFav from "./ButtonAddFav";

const Card = ({ name, username, id, theme }) => {
  const cardStyles = theme === "dark" ? "bg-slate-100 text-black" : "border-1 text-gray-900";

  return (
    <div className={`flex flex-col items-center border-2 rounded-lg shadow-md p-3 hover:shadow-2xl ${cardStyles}`}>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/detail/${id}`} className="flex flex-col justify-around items-center ">
        <img
          src="../../public/images/doctor.jpg"
          alt="imageDentist"
          className="w-full h-[200px] object-cover mb-4 rounded-md"
        />
        <p>{name}</p>
        <p>{username}</p>
      </Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <ButtonAddFav name={name} username={username} id={id} />
    </div>
  );
};

export default Card;
