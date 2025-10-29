import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useCallback } from 'react';

export default function Contact() {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const message = form.message.value;
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:navyashree@example.com?subject=${subject}&body=${body}`;
  }, []);

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">About</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I'm an MCA graduate with a BCA foundation, focused on building full‑stack web applications.
              My recent work includes MediMeet (doctor appointment booking) and Freedom From Hunger (food waste management).
              I enjoy turning ideas into polished, accessible products.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-700">
              <p className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> India</p>
              <p className="inline-flex items-center gap-2"><Mail className="w-4 h-4 text-blue-600" /> navyashree@example.com</p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-50"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-50"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div id="contact" className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Let’s work together</h3>
            <p className="text-gray-600 mt-1">Send a quick message and I’ll get back to you.</p>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Your name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows={4} required className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-600 focus:ring-blue-600" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Send via Email
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">No data is stored — this opens your email client with the details.</p>
          </div>
        </div>

        <div className="mt-16 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Navyashree. All rights reserved.
        </div>
      </div>
    </section>
  );
}
