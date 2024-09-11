import './competence.css';
import { ReactComponent as PythonIcon } from '../icons/python.svg';
import CIcon from '../icons/c.png';
import { ReactComponent as JavaScriptIcon } from '../icons/javascript.svg';
import { ReactComponent as CppIcon } from '../icons/c++.svg';
import { ReactComponent as HtmlIcon } from '../icons/html-5.svg';
import { ReactComponent as CssIcon } from '../icons/css3.svg';
import { ReactComponent as VscodeIcon } from '../icons/vscode.svg';
import { ReactComponent as GitIcon } from '../icons/git.svg';
import { ReactComponent as GithubIcon } from '../icons/github.svg';
import { ReactComponent as NodejsIcon } from '../icons/nodejs.svg';
import ReactIcon from '../icons/react.png';
import  FrenchIcon from '../icons/french.png';
import  EnglishIcon from '../icons/english.png';



function Competence() {
    return (
        <section id="competence">
          <h2>Compétences :</h2>
          <ul className="competence-list">
            <li className="competence-item">
              <img src={CIcon} alt="C" className="competence-icon" style={{ width: '50px', marginRight: '8px' }} />
            </li>
            <li className="competence-item">
              <CppIcon className="competence-icon" style={{ fontSize: '24px', marginRight: '8px' }} />
            </li>
            <li className="competence-item">
              <PythonIcon className="competence-icon" style={{ fontSize: '24px', marginRight: '8px' }} />
            </li>
            <li className="competence-item">
              <JavaScriptIcon className="competence-icon" style={{ fontSize: '24px', marginRight: '8px' }} />
            </li>
            <li className="competence-item">
              <HtmlIcon className="competence-icon" style={{ fontSize: '24px', marginRight: '8px' }} />
            </li>
            <li className="competence-item">
              <CssIcon className="competence-icon" style={{ fontSize: '24px', marginRight: '8px' }} />
            </li>
          </ul>

          <h3>Logiciels / Framework</h3>
          <ul className="competence-list">
            <li className="competence-item">
              <VscodeIcon className="competence-icon" style={{ fontSize: '24px', marginRight: '8px' }} />
            </li>
            <li className="competence-item">
              <GitIcon className="competence-icon" style={{ fontSize: '24px', marginRight: '8px' }} />
            </li>
            <li className="competence-item">
              <GithubIcon className="competence-icon" style={{ fontSize: '24px', marginRight: '8px' }} />
            </li>
            <li className="competence-item">
              <img src={ReactIcon} alt="React" className="competence-icon" style={{ width: '50px', marginRight: '8px' }} />
            </li>
            <li className="competence-item">
              <NodejsIcon className="competence-icon" style={{ fontSize: '24px', marginRight: '8px' }} />
            </li>
          </ul>

          <h3>Langues</h3>
          <ul className="competence-list">
            <li className="competence-item">
              <img src={FrenchIcon} alt="Français" className="competence-icon" style={{ width: '50px', marginRight: '8px' }} />
            </li>
            <li className="competence-item">
              <img src={EnglishIcon} alt="Anglais" className="competence-icon" style={{ width: '50px', marginRight: '8px' }} />
            </li>
          </ul>
          
        </section>
    );
}

export default Competence;