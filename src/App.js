import React from 'react';
import './App.css';
import pfp from './images/pfp.png'; 
import holopinBadge from './images/holopin.png';

function App() {
  return (
    <div className="portfolio">
      <div className="profile-content">
        <h1 className="name">Saher Siddiqui</h1>
        <p className="subtitle">
          Computer Science Engineering Student, passionate about Open Source and
          MERN Stack Web Development.
        </p>
        <a href="https://github.com/saher2106">
        <img src={pfp} alt="Saher Siddiqui" className="profile-image" />
        </a>
        <a href="https://holopin.io/@saher2106">
        <img src={holopinBadge} alt="Holopin Badge" className="holopin-badge" />
        </a>
        <h2>My Work</h2>
        <p>
          🎨 UI/UX Design Portfolio: Check out my{' '}
          <a href="https://www.behance.net/siddiquisaher" className="blue-link">
            Behance
          </a>{' '}
          portfolio.
        </p>
        <p>
          🚀 Web Development: I work with MERN Stack. You can check out my work{' '}
          <a href="https://saher2106.github.io/BS-JS-TASK" className="blue-link">
            here
          </a>
          .
        </p>
        <p>
          📝 Tech Blogging: I share insights and knowledge on my{' '}
          <a href="https://saher.hashnode.dev" className="blue-link">
            Hashnode Tech Blog
          </a>
          .
        </p>
        <h2>Skills</h2>
        <a href="https://skillicons.dev/icons?i=html,css,bootstrap,react,express,mongodb,javascript,jquery,vscode,nodejs,figma,c,cpp,r,mysql,mongodb,github,aws&theme=dark&perline=9">
          <img
            src="https://skillicons.dev/icons?i=html,css,bootstrap,react,express,mongodb,javascript,jquery,vscode,nodejs,figma,c,cpp,r,mysql,mongodb,github,aws&theme=dark&perline=9"
            alt="My Skills"
            className="skills-icon"
          />
        </a>
        <h2>Let's Connect</h2>
        <p>
          <a href="https://www.linkedin.com/in/saher-siddiqui-400886217/">
            <img
              src="https://img.shields.io/badge/-LinkedIn-0077B5?style=flat&logo=Linkedin&logoColor=white"
              alt="LinkedIn"
            />
          </a>
          <a href="https://saher.hashnode.dev/">
            <img
              src="https://img.shields.io/badge/-Hashnode-2962FF?style=flat&logo=Hashnode&logoColor=white"
              alt="Hashnode"
            />
          </a>
          <a href="https://www.behance.net/siddiquisaher">
            <img
              src="https://img.shields.io/badge/-Behance-1769FF?style=flat&logo=Behance&logoColor=white"
              alt="Behance"
            />
          </a>
          <a href="https://github.com/saher2106">
            <img
              src="https://img.shields.io/badge/-GitHub-000000?style=flat&logo=GitHub&logoColor=white"
              alt="GitHub"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
