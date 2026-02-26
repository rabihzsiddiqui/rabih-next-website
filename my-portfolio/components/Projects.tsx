const projects = [
  {
    title: "Restaurant Rating Analysis Based on Proximity",
    description:
      "Analyzed correlations between restaurant ratings and geographic proximity using real-world dataset. Applied statistical methods and data visualization techniques to identify patterns in how location influences user ratings across review platforms. Findings were presented through interactive Jupyter notebooks with clear charts and narrative commentary.",
    tech: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    gradient: "from-indigo-500/20 to-blue-500/20",
    accentBorder: "hover:border-indigo-500/40",
    accentGlow: "group-hover:shadow-indigo-500/10",
  },
  {
    title: "V.I.S.A — Visual Impairment & Sensory Aid",
    description:
      "Designed a conceptual assistive technology solution for individuals with visual impairments. Used collaborative mind-mapping and Google Workspace to outline a multi-sensory aid system integrating haptic feedback, spatial audio cues, and environmental awareness features. The project emphasized inclusive design principles and real-world usability for the visually impaired community.",
    tech: ["Google Workspace", "Mind Maps", "UX Design", "Accessibility"],
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    gradient: "from-violet-500/20 to-purple-500/20",
    accentBorder: "hover:border-violet-500/40",
    accentGlow: "group-hover:shadow-violet-500/10",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projects
          </h2>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-zinc-800/40 border border-zinc-700/50 rounded-2xl p-7 flex flex-col transition-all duration-300 ${project.accentBorder} hover:shadow-xl ${project.accentGlow}`}
            >
              {/* Gradient top accent */}
              <div
                className={`absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} border border-zinc-700/50 flex items-center justify-center text-zinc-300 mb-5`}
              >
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 leading-snug group-hover:text-indigo-300 transition-colors duration-200">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-zinc-700/60 text-zinc-300 border border-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
