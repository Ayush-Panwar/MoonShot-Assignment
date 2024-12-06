export function createProjectCard(project) {
  return `
    <div class="project-card">
      <h2>${project.title}</h2>
      <h3 class="project-name">${project.name}</h3>
      <p class="description">${project.description}</p>
      <div class="features-list">
        <h3>Key Features:</h3>
        <ul>
          ${project.features
            .map(
              (feature) => `
            <li>${feature}</li>
          `
            )
            .join("")}
        </ul>
      </div>
      <div class="project-links">
        <a href="${
          project.liveUrl
        }" target="_blank" rel="noopener noreferrer" class="btn live">Live Demo</a>
        <a href="${
          project.githubUrl
        }" target="_blank" rel="noopener noreferrer" class="btn ">GitHub</a>
      </div>
    </div>
  `;
}
