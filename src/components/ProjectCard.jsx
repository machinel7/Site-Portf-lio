import "../styles/ProjectCard.css";

export default function ProjectCard({ project, onClick }) {
  return (
    <button
      className="project-card"
      onClick={() => onClick(project)}
      aria-label={`Ver detalhes de ${project.name}`}
    >
      <span className="project-card__name">{project.name}</span>
      <span className="project-card__arrow" aria-hidden="true">→</span>
    </button>
  );
}
