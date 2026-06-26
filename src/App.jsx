import { useState } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import Modal from "./components/Modal";
import projects from "./data/projects";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Header />
      <main>
        <ProjectList projects={projects} onSelect={setSelectedProject} />
      </main>

      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
