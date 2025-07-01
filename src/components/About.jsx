import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const calculateAge = () => {
    const birthDate = new Date(1999, 2, 14);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { age--; }
    return age;
  };

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
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-center mb-12">À Propos de moi</h2>
        <div className="bg-background p-8 rounded-lg border border-border shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
          <p className="text-lg text-secondary leading-relaxed">
            Bonjour ! Je suis Hamza Kachmir, j'ai {calculateAge()} ans et je viens du Sud de la France. Après quelques années en intérim, j’ai choisi de faire une reconversion professionnelle dans le numérique, un domaine qui m’a toujours passionné.
            <br /><br />
            J’ai d’abord suivi une formation de développeur web, puis de concepteur développeur d’application. Désormais, je souhaite finaliser cette reconversion par une formation de <strong className="text-accent">Data Engineer</strong>.
            <br /><br />
            Motivé, curieux et déterminé, je cherche une alternance pour mettre en pratique mes compétences, contribuer à des projets concrets et continuer à apprendre chaque jour.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;