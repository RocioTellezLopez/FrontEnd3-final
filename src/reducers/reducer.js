/* eslint-disable no-case-declarations */
export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTIST":
      return { ...state, list: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FAV":
      const filteredFavs = state.favs.filter(
        (fav) => fav.id !== action.payload.id
      );
      return { ...state, favs: filteredFavs };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_FORM_DATA":
      return { ...state, formData: { ...state.formData, ...action.payload } };
    case "SET_FORM_ERROR":
      return { ...state, formError: action.payload };
    case "SET_FORM_SUCCESS":
      return { ...state, formSuccess: action.payload };
    case "RESET_FORM":
      return {
        ...state,
        formData: { name: "", email: "" },
        formError: null,
        formSuccess: null,
      };
  }
};
