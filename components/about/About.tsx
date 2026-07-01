export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="mb-14 text-center text-5xl font-bold">
          About Me
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-8 text-slate-400">
          I'm Nishtha Vatsa, a Full Stack Developer passionate
          about building scalable AI-powered web applications.
          I enjoy transforming ideas into responsive,
          user-friendly products while continuously exploring
          modern technologies and best development practices.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

            <h3 className="mb-3 text-xl font-semibold">
              Education
            </h3>

            <p className="text-slate-400">
              B.Tech (ECE)
            </p>

            <p className="text-slate-400">
              GCET
            </p>

            <p className="text-cyan-400">
              CGPA 7.93
            </p>

          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

            <h3 className="mb-3 text-xl font-semibold">
              Experience
            </h3>

            <p className="text-slate-400">
              3 Production Projects
            </p>

          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

            <h3 className="mb-3 text-xl font-semibold">
              Coding
            </h3>

            <p className="text-slate-400">
              180+ LeetCode Problems
            </p>

          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

            <h3 className="mb-3 text-xl font-semibold">
              Certifications
            </h3>

            <p className="text-slate-400">
              Coding Ninjas
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}