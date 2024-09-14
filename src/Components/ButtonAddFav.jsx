import { StarIcon } from "@heroicons/react/16/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/16/solid";
import { useDentistStates } from "../utils/Context";

const ButtonAddFav = ({ name, username, id }) => {
  const { state, dispatch } = useDentistStates();
  const isFav = state.favs.find((fav) => fav.id === id);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({
      type: isFav ? "REMOVE_FAV" : "ADD_FAV",
      payload: { name, username, id },
    });
  };

  return (
    <button onClick={addFav} className="w-full bg-rose-400 p-2 m-2 flex flex-row justify-center rounded-lg hover:bg-rose-500">
      {isFav ? (
        <>
          <span className="mr-2">Remove Fav</span>
          <StarIcon className="h-6 w-6 text-yellow-400" />
        </>
      ) : (
        <>
          <span className="mr-2">Add Fav</span>
          <StarOutlineIcon className="h-6 w-6 text-white" />
        </>
      )}
    </button>
  );
};

export default ButtonAddFav;
