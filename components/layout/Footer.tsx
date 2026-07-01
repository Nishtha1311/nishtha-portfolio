export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <h3 className="font-semibold">
          Nishtha Portfolio
        </h3>

        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Nishtha Vatsa.
          Built with Next.js & Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}