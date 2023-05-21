import  { React ,useState }  from 'react'
import Modal from './Navbarhome/Modal';

const Avbar = () => {
  const [active, setActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="fixed w-full bg-sky-800 text-white flex justify-between  py-1 px-4 items-center">
      <div className="text-xl font-bold text-center uppercase">
        <h1>
           <span className="block text-lg">AlSafir</span>
        </h1>
      </div>

      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-150"></div>

        <ul className="hidden md:flex gap-8 py-1 px-6 uppercase bg-white/10">
          <li>
            <a href="/">Carte</a>
          </li>
          <li>
            <a href="/">Offres</a>
          </li>
          <div > 
      <button  
        onClick={() => {
          setModalOpen(true);
        }}>
          S'inscrire
        </button>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
        </ul>
      </nav>
    </div>
  );
};

export default Avbar;
