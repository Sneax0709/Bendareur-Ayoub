import portrait from '../src/img/Menu.jpg';
import user from '../src/img/person.png';
import projets from '../src/img/projets.png';
import skills from '../src/img/skills.png';
import contact from '../src/img/contact.png'
import experience from '../src/img/experience.png';
/* import hobbies from '../src/img/hobbies.png'; */
import './App.css';

import React, { useState, useEffect, useRef } from 'react';

function App() {

  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (event)=>{
      if(!menuRef.current.contains(event.target)){
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="App">
      <div className="menu-container" ref={menuRef}>
        <div className="menu-trigger" onClick={() => setOpen(!open)}>
          <img src={portrait} alt="Portrait" />
        </div>
        <div className={`dropdown-menu ${open ? 'active' : ''}`}>
          <h3>Bendareur Ayoub<br /><span>Etudiant Epitech Lyon</span></h3>
          <ul>
            <DropdownItem img={user} text="Présentation" sectionId="presentation" />
            <DropdownItem img={skills} text="Compétence" sectionId="competence"/>
            <DropdownItem img={projets} text="Projets" sectionId="projets"/>
            {/* <DropdownItem img={experience} text="Expérience" sectionId="experiences"/> */}
            <DropdownItem img={contact} text="Contact" sectionId="contact"/>
            {/* <DropdownItem img={hobbies} text="Hobbies" sectionId="hobbies"/> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <li className='dropdownItem'>
      <img src={props.img} alt="Dropdown Item" />
      <a href={`#${props.sectionId}`} onClick={(e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        scrollToSection(props.sectionId);
      }}> 
        {props.text} 
      </a>
    </li>
  );
}

export default App;


