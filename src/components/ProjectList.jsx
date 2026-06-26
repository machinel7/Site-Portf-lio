import ProjectCard from "./ProjectCard";
import "../styles/ProjectCard.css";

export default function ProjectList({ projects, onSelect }) {
  return (
    <section className="project-list" aria-label="Lista de projetos">
      <p className="project-list__label">Projetos</p>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onClick={onSelect} />
      ))}
    </section>
  );
}
