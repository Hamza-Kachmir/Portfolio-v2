import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { to: 'about', label: 'À propos' },
    { to: 'experience', label: 'Parcours' },
    { to: 'skills', label: 'Compétences' },
    { to: 'projects', label: 'Projets' },
    { to: 'contact', label: 'Contact' },
  ];

  const navVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 50, delay: 0.2 } }
  };

  return (
    <motion.nav 
      className="bg-card/80 backdrop-blur-sm fixed w-full z-20 top-0 start-0 border-b border-border"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <img src="/assets/logos/hkc.png" alt="Logo HKC" className="h-16" />
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-primary">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`w-full md:w-auto md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row mt-4 md:mt-0 md:space-x-8">
            {links.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-90}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-secondary hover:text-accent font-bold cursor-pointer transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;