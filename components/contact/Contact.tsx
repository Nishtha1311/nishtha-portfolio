export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
    >
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="mb-5 text-center text-5xl font-bold">
          Let's Connect
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
          I'm currently looking for Full Stack Development opportunities,
          internships and exciting projects. Feel free to reach out!
        </p>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
            <h3 className="mb-3 text-xl font-semibold">Email</h3>

            <a
              href="mailto:nishthavatsa@gmail.com"
              className="text-cyan-400 break-all"
            >
              nishthavatsa@gmail.com
            </a>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
            <h3 className="mb-3 text-xl font-semibold">LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/nishtha-vatsa"
              target="_blank"
              className="text-cyan-400"
            >
              View Profile
            </a>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
            <h3 className="mb-3 text-xl font-semibold">GitHub</h3>

            <a
              href="https://github.com/Nishtha1311"
              target="_blank"
              className="text-cyan-400"
            >
              github.com/Nishtha1311
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}