import { GraduationCap, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <p className="inline-flex items-center gap-2 text-sm text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
              <GraduationCap className="w-4 h-4" /> MCA Graduate • MERN Developer
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Hi, I'm <span className="text-blue-600">Navyashree</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Passionate full‑stack developer with a strong foundation in computer applications (BCA, MCA).
              I build performant, user‑centric web apps with the MERN stack.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700">
                <Code className="w-4 h-4" /> View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-gray-300 hover:bg-gray-50">
                Get in touch
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Tailwind CSS'].map((skill) => (
                <span key={skill} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-gray-100 shadow-inner flex items-center justify-center">
              <div className="text-center p-6">
                <div className="mx-auto w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-3xl font-semibold">
                  N
                </div>
                <p className="mt-4 text-gray-700 font-medium">BCA • MCA</p>
                <p className="text-sm text-gray-500">Open to MERN stack roles and internships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
