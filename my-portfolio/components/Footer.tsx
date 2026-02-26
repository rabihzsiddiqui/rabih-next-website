export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white mb-1">
              Rabih<span className="text-indigo-400">.</span>
            </p>
            <p className="text-sm text-zinc-500">
              Cognitive Scientist · UX Researcher · Product Tester
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/rabihsiddiqui/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-zinc-300 hover:text-white text-sm font-medium transition-all duration-200 group"
            >
              <svg
                className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            <a
              href="mailto:rabihzsiddiqui@gmail.com"
              aria-label="Send email"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-zinc-300 hover:text-white text-sm font-medium transition-all duration-200 group"
            >
              <svg
                className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email
            </a>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
          <p className="text-xs text-zinc-600">
            © {currentYear} Rabih Siddiqui. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
