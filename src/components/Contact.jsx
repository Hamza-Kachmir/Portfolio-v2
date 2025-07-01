import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section
      className="py-20 bg-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-montserrat font-bold mb-4">Me Contacter</h2>
        <p className="text-lg text-secondary mb-10">
          Je suis activement à la recherche d'une alternance. N'hésitez pas à me contacter !
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <a href="mailto:hamza.kachmir@icloud.com" className="bg-background border border-border p-6 rounded-lg flex items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
            <FaEnvelope className="text-accent text-2xl" />
            <div>
              <h4 className="font-bold text-primary text-left">Email</h4>
              <p className="text-secondary">hamza.kachmir@icloud.com</p>
            </div>
          </a>
          <a href="tel:+33667711057" className="bg-background border border-border p-6 rounded-lg flex items-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
            <FaPhone className="text-accent text-2xl transform -scale-x-100" />
            <div>
              <h4 className="font-bold text-primary text-left">Téléphone</h4>
              <p className="text-secondary">06 67 71 10 57</p>
            </div>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;