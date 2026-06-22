export default function Footer() {
  return (
    <footer className="bg-[#1c1d26] text-white/70">
      <div id="contact" className="container-page py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-white text-2xl mb-4">Get in touch</h3>
            <p className="text-white/70 max-w-xl mb-6 leading-relaxed">
              Reach out if you'd like to talk about my projects, discuss an
              opportunity, or anything else. I'd love to hear from you.
            </p>
            <a
              href="mailto:dxp.solidstate@gmail.com"
              className="btn btn-primary"
            >
              Email me
            </a>
          </div>
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-white/40">Email · </span>
                <a
                  href="mailto:dxp.solidstate@gmail.com"
                  className="hover:text-white"
                >
                  dxp.solidstate@gmail.com
                </a>
              </li>
              <li>
                <span className="text-white/40">GitHub · </span>
                <a
                  href="https://github.com/Syahmi-Faris"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Syahmi-Faris
                </a>
              </li>
              <li>
                <span className="text-white/40">Location · </span>
                Karak, Pahang, Malaysia
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 text-xs text-white/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Muhammad Syahmi Faris Bin Rusli</p>
          <p>Universiti Teknologi Malaysia · Computer Science</p>
        </div>
      </div>
    </footer>
  );
}
