import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        name: "Big Data & ETL",
        logo: "big-data.svg",
        libraries: ["Spark", "DBT", "Talend", "Apache Hive"]
    },
    {
        name: "Cloud & Orchestration",
        logo: "cloud.svg",
        libraries: ["Azure", "Power BI", "Docker", "Airflow"]
    },
    {
        name: "Python",
        logo: "python.svg",
        libraries: ["Pandas", "NumPy", "PySpark", "FastAPI", "API REST", "Tkinter"]
    },
    {
        name: "Bases de Données",
        logo: "database.svg",
        libraries: ["SQL", "PostgreSQL", "MySQL", "SQLite", "MongoDB"]
    },
    {
        name: "Développement Web",
        logo: "web.svg",
        libraries: ["React", "jQuery", "PHP", "Tailwind CSS", "Bootstrap"]
    },
    {
        name: "Environnement & Outils",
        logo: "tools.svg",
        libraries: ["GitHub", "GitLab", "Bash", "Figma", "VS Code"]
    }
];

const Skills = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.section
            className="py-20 bg-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-montserrat font-bold text-center mb-16">Mes Compétences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((skill) => (
                        <div key={skill.name} className="bg-background p-6 rounded-lg border border-border text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 flex flex-col">
                            <img src={`/assets/logos/${skill.logo}`} alt={`${skill.name} logo`} className="h-16 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-primary mb-3 flex-grow">{skill.name}</h3>
                            {skill.libraries && (
                                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                                    {skill.libraries.map((lib) => (
                                        <span key={lib} className="bg-accent text-background text-sm font-bold px-3 py-1 rounded-full">
                                            {lib}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;