

const Footer = () => {
  return (
    <footer className="bg-rose-700 flex flex-row items-center justify-around w-full m-0">
      <div className="flex items-center">
        <img
          src="../../public/images/DH.png"
          alt="Logo"
          className="h-8"
        />
      </div>
      <div className="flex gap-4">
        <a href="">
          <img src="../../public/images/ico-facebook.png" className="h-6" />
        </a>
        <a href="">
          <img src="../../public/images/ico-instagram.png" className="h-6" />
        </a>
        <a href="">
          <img src="../../public/images/ico-whatsapp.png" className="h-6" />
        </a>
        <a href="">
          <img src="../../public/images/ico-tiktok.png" className="h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
