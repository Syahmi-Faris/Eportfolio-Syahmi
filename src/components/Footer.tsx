export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 mt-24">
      <div className="container-page py-10 text-sm text-zinc-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Muhammad Syahmi Faris. Universiti Teknologi Malaysia.</p>
        <p className="text-zinc-400">Built with React, Vite, and Tailwind.</p>
      </div>
    </footer>
  );
}
