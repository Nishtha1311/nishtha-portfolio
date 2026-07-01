import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="mb-16 text-center text-5xl font-bold">
          Featured Projects
        </h2>

        <div className="grid gap-10">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}