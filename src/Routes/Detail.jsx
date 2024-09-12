import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [detail, setDetail] = useState({})
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  // console.log(id);

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDetail(res.data)
    });
  }, []);

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <div>
        <img src="../../public/images/doctor.jpg" alt="imgDentist" />
        <h3>{detail.name}</h3>
        <p>Email: {detail.email}</p>
        <p>Telefono: {detail.phone}</p>
        <p>Sitio web: {detail.website}</p>
      </div>
    </>
  );
};

export default Detail;
