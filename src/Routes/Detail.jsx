import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../Components/CardDetail";
import { useDentistStates } from "../utils/Context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  const { state } = useDentistStates();

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDetail(res.data);
    });
  }, [url]);

  return (
    <div className={`flex flex-col items-center pb-6 ${state.theme === "dark" ? "bg-slate-800 text-white" : "bg-white text-black"}`}>
      <h1 className="text-2xl font-bold mb-4 p-4">Detail Dentist </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <CardDetail
        key={detail.id}
        name={detail.name}
        email={detail.email}
        phone={detail.phone}
        website={detail.website}
        theme={state.theme}
      />
    </div>
  );
};

export default Detail;
