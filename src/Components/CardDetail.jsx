const CardDetail = ( { name, email, phone, website, theme }) => {
  const cardStyles = theme === "dark" ? "bg-slate-100 text-black" : "border-1 text-gray-900";

  return (
    <div className={`flex-col justify-around items-center border-solid border-2 rounded-lg shadow-md p-4 ${cardStyles}`}>
      <img
        src="../../public/images/doctor.jpg"
        alt="imgDentist"
        className="w-full h-[300px] object-cover mb-4 rounded-md"
      />
      <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
      <p className="text-gray-700 mb-1">Email: {email}</p>
      <p className="text-gray-700 mb-1">Phone: {phone}</p>
      <p className="text-gray-700 mb-1">Website: {website}</p>
    </div>
  );
};

export default CardDetail;
