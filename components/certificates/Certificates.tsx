const certificates = [
  {
    title: "Backend Development with Node.js",
    issuer: "Coding Ninjas",
    link: "YOUR_NODE_CERTIFICATE_LINK",
  },
  {
    title: "React",
    issuer: "Coding Ninjas",
    link: "YOUR_REACT_CERTIFICATE_LINK",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Coding Ninjas",
    link: "YOUR_DSA_CERTIFICATE_LINK",
  },
  {
    title: "Frontend Development",
    issuer: "Coding Ninjas",
    link: "YOUR_FRONTEND_CERTIFICATE_LINK",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-14 text-center text-5xl font-bold">
          Certificates
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
            >
              <h3 className="text-2xl font-semibold">
                {certificate.title}
              </h3>

              <p className="mt-2 text-slate-400">
                {certificate.issuer}
              </p>

              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-cyan-400 hover:underline"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}