//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Home = () => {
  const [list, setList] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data)
      setList(res.data)
    });
  }, []);
  
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {list.map((dentist) => <Card key={dentist.id} {...dentist}/>)}
      </div>
    </main>
  );
};

export default Home;
