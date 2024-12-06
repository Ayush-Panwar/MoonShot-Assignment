import './style.css';
import { projects } from './src/data/projects.js';
import { createProjectCard } from './src/components/ProjectCard.js';
import { createHeader } from './src/components/Header.js';

document.querySelector('#app').innerHTML = `
  <div class="container">
    ${createHeader()}
    <div class="projects-grid">
      ${projects.map(project => createProjectCard(project)).join('')}
    </div>
  </div>
`;