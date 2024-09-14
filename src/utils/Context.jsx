import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";

const DentistStates = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
const theme = localStorage.getItem("theme") || "light";

const initialState = {
  list: [],
  favs: lsFavs,
  theme: theme,
  formData: {
    name: "",
    email: ""
  },
  formError: null,
  formSuccess: null
};

const Context = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_DENTIST", payload: res.data });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    localStorage.setItem("theme", state.theme)
  },[state.theme])

  // useEffect(() => {
  //   if (state.theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [state.theme])

  return (
    <DentistStates.Provider value={{ state, dispatch }}>
      {children}
    </DentistStates.Provider>
  );
};

export default Context;

export const useDentistStates = () => {
  return useContext(DentistStates);
};
