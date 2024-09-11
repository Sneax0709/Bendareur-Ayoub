import React from 'react';
import ProjectCard from './ProjectCard';
import './projets.css';

function Projets() {
    const projects = [
        {
          image: require('../img/tcsh.png'),
            title: 'Minishell2',
            description: 'Recréer un shell en C avec ses commandes intégrées'
        },
        {
            image: require('../img/MyRPG.jpeg'),
            title: 'My_RPG',
            description: 'En équipe, création d\'un RPG en C avec la librairie CSFML en se basant du jeu Pokémon Emerald.'
        },
        {
            image: require('../img/Need4stek.jpeg'),
            title: 'Need4stek',
            description: 'Introduction à l\'IA avec la création d\'un programme en C pour piloter une voiture autonome.'
        },
        {
            image: require('../img/Pong.avif'),
            title: 'Pong',
            description: 'Simulation d\'un jeu de Pong en Python pour calculer les vecteurs de mouvement des balles.'
        },
    ];

    return (
        <section id="projets">
            <h2>Projets :</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projets;