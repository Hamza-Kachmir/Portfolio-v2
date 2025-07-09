import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
    {
        title: "SkillScope",
        description: "Outil de scraping et d'analyse de données pour quantifier les compétences les plus demandées dans les offres d'emploi.",
        tools: ["Python", "Pandas", "Google Cloud", "API", "IA"],
        github: "https://github.com/Hamza-Kachmir/SkillScope",
        liveUrl: "https://skillscope-4igg.onrender.com/",
        logo: 'SkillScope.svg',
        logoClassName: 'h-12 w-auto object-contain'
    },
    {
        title: "Analizor",
        description: "Outil d'automatisation de la collecte, importation et analyse des ventes d'une PME.",
        tools: ["Python", "Pandas", "Docker", "SQLite"],
        github: "https://github.com/Hamza-Kachmir/Analizor",
        logo: null,
        logoClassName: ''
    },
    {
        title: "PokéJob",
        description: "Plateforme de gestion pour faciliter le suivi de ses candidatures.",
        tools: ["Python", "Tkinter", "Docker", "PHP", "SQL", "jQuery", "Bootstrap"],
        github: "https://github.com/Hamza-Kachmir/PokeJob",
        logo: 'pokejob.png',
        logoClassName: 'h-12 w-auto object-contain'
    },
    {
        title: "Portfolio v1",
        description: "La première version de mon portfolio. Il a servi de base à la version que vous consultez actuellement.",
        tools: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
        github: "https://github.com/Hamza-Kachmir/Portfolio",
        liveUrl: "https://hamza-kachmir.onrender.com/",
        logo: 'hkc.png',
        logoClassName: 'h-14 w-14 object-contain'
    },
    {
        title: "GiveGood",
        description: "Application iOS mettant en relation des personnes désireuses d'aider avec celles dans le besoin.",
        tools: ["Swift", "SwiftUI"],
        github: "https://github.com/Hamza-Kachmir/GiveGood",
        logo: 'givegood.png',
        logoClassName: 'h-10 w-10 object-contain'
    },
    {
        title: "Easy Ocre",
        description: "Plateforme pour simplifier le suivi de la quête 'L'éternelle moisson' dans le jeu Dofus.",
        tools: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
        github: "https://github.com/Hamza-Kachmir/Easy-Ocre",
        logo: 'easy-ocre.png',
        logoClassName: 'h-14 w-14 object-contain'
    },
    {
        title: "Work Skill",
        description: "Plateforme destinée aux séniors souhaitant effectuer une reconversion professionnelle.",
        tools: ["PHP", "MySQL", "HTML", "CSS"],
        github: "https://github.com/Hamza-Kachmir/Work-Skill",
        logo: 'work-skill.png',
        logoClassName: 'h-10 w-10 object-contain'
    },
    {
        title: "Booki",
        description: "Intégration d'une maquette pour un site de réservation d'hébergements touristiques.",
        tools: ["HTML", "CSS"],
        github: "https://github.com/Hamza-Kachmir/Projet-Booki",
        logo: 'booki.png',
        logoClassName: 'h-10 w-auto object-contain'
    }
];

const Projects = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.section
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
            variants={sectionVariants}
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-montserrat font-bold text-center mb-16">Mes Projets</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {projectsData.map((project) => (
                        <article key={project.title} className="w-full md:w-[30%] bg-card border border-border rounded-lg p-6 flex flex-col shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20">
                            <div className="flex justify-between items-center gap-4 mb-4 min-h-[56px]">
                                <h3 className="text-2xl font-bold text-primary flex-grow">{project.title}</h3>
                                {project.logo && (
                                    <div className="flex-shrink-0">
                                        <img src={`/assets/logos/${project.logo}`} alt={`Logo ${project.title}`} className={project.logoClassName} />
                                    </div>
                                )}
                            </div>
                            
                            <div className="mb-4 min-h-[52px]">
                                <div className="flex flex-wrap justify-center gap-2">
                                    {project.tools.map(tool => 
                                        <span key={tool} className="text-sm bg-accent text-background font-bold px-3 py-1 rounded-full text-center">
                                            {tool}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <p className="text-secondary mb-4 flex-grow">{project.description}</p>
                            
                            <div className="mt-auto flex flex-col sm:flex-row gap-3 justify-center items-center">
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-accent text-background font-bold py-2 px-3 rounded-lg hover:bg-accent-hover transition-all duration-300">
                                        <FaExternalLinkAlt /> Voir le site
                                    </a>
                                )}
                                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-accent text-accent font-bold py-2 px-3 rounded-lg hover:bg-accent hover:text-background transition-all duration-300">
                                    <FaGithub /> Voir le code
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;