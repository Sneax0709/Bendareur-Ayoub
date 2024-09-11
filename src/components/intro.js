import React, { useEffect, useState } from 'react';
import './intro.css';

function Intro() {
  const [introText, setIntroText] = useState('');
  const [subText, setSubText] = useState('');
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    const intro = "Bendareur Ayoub";
    const sub = "Etudiant informatique à Epitech Lyon";
    let introIndex = 0;
    let subIndex = 0;

    const typeIntro = () => {
      if (introIndex < intro.length) {
        setIntroText(intro.slice(0, introIndex + 1));
        introIndex++;
      } else {
        clearInterval(introInterval);
        const subInterval = setInterval(() => {
          if (subIndex < sub.length) {
            setSubText(sub.slice(0, subIndex + 1));
            subIndex++;
          } else {
            clearInterval(subInterval);
            setShowCaret(false); // Hide caret after typing is complete
          }
        }, 100);
      }
    };

    const introInterval = setInterval(typeIntro, 100);

    return () => {
      clearInterval(introInterval);
    };
  }, []);

  return (
    <section id="intro">
      <h1 className={`typing ${showCaret ? '' : 'no-caret'}`}>{introText}</h1>
      <h3 className={`typing ${showCaret ? '' : 'no-caret'}`}>{subText}</h3>
    </section>
  );
}

export default Intro;