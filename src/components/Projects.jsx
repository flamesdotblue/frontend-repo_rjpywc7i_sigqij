import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'MediMeet',
    period: 'MCA Final Year',
    description:
      'A doctor appointment booking system that enables patients to discover doctors, schedule appointments, and manage medical visits seamlessly.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Tailwind'],
  },
  {
    title: 'Freedom From Hunger',
    period: 'BCA Major Project',
    description:
      'A food waste management platform connecting donors with NGOs and volunteers to redistribute surplus food efficiently and safely.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'REST APIs'],
  },
];

function Tag({ label }) {
  return <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">{label}</span>;
}

function ProjectCard({ project }) {
  return (
    <div className="group rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow bg-white">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
          <p className="text-sm text-gray-500">{project.period}</p>
        </div>
        <span className="inline-flex items-center gap-1 text-xs text-blue-700 bg-blue-50 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          Case study <ExternalLink className="w-3.5 h-3.5" />
        </span>
      </div>
      <p className="mt-3 text-gray-600 leading-relaxed">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Tag key={s} label={s} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
          <p className="mt-3 text-gray-600">
            A selection of academic and capstone work focused on solving real‑world problems with the MERN stack.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
