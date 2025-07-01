import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        type: 'Formation',
        title: "Data Engineer",
        level: "Bac +5",
        company: "Simplon",
        date: "Juillet 2025 - Avril 2027",
        description: "Formation en alternance pour acquérir des compétences pointues dans la Data et finaliser ma reconversion professionnelle."
    },
    {
        type: 'Formation',
        title: "Concepteur Développeur d'Application",
        level: "Bac +3",
        company: "Studi",
        date: "Juin 2024 - Mars 2025",
        description: "Apprentissage du développement d'applications mobiles et desktop. Formation à distance qui a renforcé mon autonomie."
    },
    {
        type: 'Formation',
        title: "Apple Foundation Program - Développement iOS",
        level: null,
        company: "Simplon",
        date: "Septembre 2023 - Octobre 2023",
        description: "Programme intensif de 4 semaines d'initiation au développement iOS avec Swift et SwiftUI."
    },
    {
        type: 'Stage',
        title: "Développeur Web",
        level: null,
        company: "Mon AGIL",
        date: "Mai 2023 - Juin 2023",
        description: "Mise en place du responsive et amélioration de l'ergonomie de l'application."
    },
    {
        type: 'Formation',
        title: "Développeur Web et Web Mobile",
        level: "Bac +2",
        company: "Simplon",
        date: "Novembre 2022 - Juillet 2023",
        description: "Formation de 8 mois intensive avec un stage de 6 semaines en entreprise."
    },
    {
        type: 'Formation',
        title: "Prep'Apprentissage - Développement Web",
        level: null,
        company: "OpenClassrooms",
        date: "Décembre 2021 - Avril 2022",
        description: "Première formation dans le développement web pour acquérir les bases et commencer à construire un réseau."
    }
];

const Experience = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.section
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-montserrat font-bold text-center mb-16">Mon Parcours</h2>
                <div className="relative border-l-2 border-border ml-3">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-accent rounded-full -left-3 ring-8 ring-background"></span>
                            
                            <div className="flex items-center flex-wrap gap-x-3 gap-y-2 mb-2">
                                <span 
                                    className="text-xs font-bold rounded-full px-3 py-1 bg-accent text-background"
                                >
                                    {exp.type}
                                </span>
                                <span className="text-sm font-semibold text-primary bg-card px-3 py-1 rounded-full">
                                    {exp.company}
                                </span>
                                {exp.level && <span className="text-sm font-medium text-primary bg-card px-2 py-0.5 rounded">{exp.level}</span>}
                            </div>

                            <h3 className="text-xl font-semibold text-primary mb-2">{exp.title}</h3>
                            <p className="block mb-2 text-sm font-normal leading-none text-secondary">{exp.date}</p>
                            <p className="text-base font-normal text-secondary">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;