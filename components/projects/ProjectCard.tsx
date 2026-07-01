import Image from "next/image";

type Project = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
};

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-500">

      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={700}
        className="h-72 w-full object-cover"
      />

      <div className="p-8">

        <h3 className="text-3xl font-bold">
          {project.title}
        </h3>

        <p className="mt-2 text-cyan-400">
          {project.subtitle}
        </p>

        <p className="mt-6 leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm"
            >
              {item}
            </span>
          ))}

        </div>

        <div className="mt-8 flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan-500 px-5 py-2 font-semibold transition hover:bg-cyan-400"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-600 px-5 py-2 transition hover:border-cyan-400"
          >
            Live Demo
          </a>

        </div>

      </div>
    </div>
  );
}