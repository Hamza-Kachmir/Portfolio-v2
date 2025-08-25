import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <header id="home" className="h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-montserrat font-black text-primary mb-4">Hamza Kachmir</h1>
        <TypeAnimation
          sequence={[
            'Futur Data Engineer', 2000,
            'Passionné par la technologie', 2000,
            'À la recherche d\'une alternance', 2000,
          ]}
          wrapper="h2"
          speed={50}
          className="text-2xl md:text-3xl text-accent font-nunito mb-6"
          repeat={Infinity}
        />
        <p className="max-w-2xl mx-auto text-lg text-secondary mb-8">
          Bienvenue sur mon portfolio. Découvrez mon parcours et mes projets.
        </p>
        <a href="/CV_Hamza_Kachmir.pdf" download="CV_Hamza_Kachmir.pdf" className="bg-transparent border-2 border-accent text-accent font-bold py-3 px-6 rounded-lg hover:bg-accent hover:text-background transition-all duration-300">
          Télécharger mon CV
        </a>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <a href="https://github.com/Hamza-Kachmir" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent text-3xl transition-colors duration-300"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/hamza-kachmir/" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent text-3xl transition-colors duration-300"><FaLinkedin /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;