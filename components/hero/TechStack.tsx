"use client";

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "Gemini AI",
];

export default function TechStack() {
  return (
    <div className="mt-16 flex flex-wrap justify-center gap-4">
      {tech.map((item) => (
        <span
          key={item}
          className="rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2 text-sm text-slate-300 backdrop-blur-md transition hover:border-cyan-400 hover:text-white"
        >
          {item}
        </span>
      ))}
    </div>
  );
}