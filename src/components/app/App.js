import { useEffect, useState } from "react";

import About from "../about/About";
import Footer from "../footer/Footer";
import Greating from "../greating/Greating";
import Header from "../header/Header";
import Modal from "../modal/Modal";
import { Portfolio } from "../portfolio/Portfolio";
import Skills from "../skills/Skills";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

useEffect(() => {
  if(isModalOpen){
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [isModalOpen]);


  return (
    <div className="app">
      <Header isModalOpen={isModalOpen}/>
      <Greating/>
      <About isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <Skills/>
      <Portfolio/>
      <Footer/>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  );
}

export default App;
