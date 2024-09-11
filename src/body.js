import React from 'react';
import './style.css';
import video from '../src/assets/white_bg.mp4';
import Intro from './components/intro';
import Presentation from './components/presentation';
import Competence from './components/competence';
import Projets from './components/projets';
/* import Experience from './experience'; */
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      <div className="bg">
        <video autoPlay muted loop id="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <header className="App-header">
      </header> */}
        <main>
        <Intro/>
        <Presentation/>
        <Competence/>
        <Projets/>
        {/* <Experience/> */}
        <Contact/>
      </main>
      <script src="app.js"></script>
    </div>
  );
}

export default App;