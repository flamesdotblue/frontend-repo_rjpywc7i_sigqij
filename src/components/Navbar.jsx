import { useState } from 'react';
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-semibold text-lg tracking-tight">
            <span className="text-blue-600">Navyashree</span>
            <span className="text-gray-800"> • Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="inline-flex items-center gap-3 pl-4 border-l border-gray-200">
              <a
                href="mailto:navyashree@example.com"
                className="inline-flex items-center gap-2 text-sm bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:navyashree@example.com"
                className="px-3 py-2 rounded-md bg-blue-600 text-white text-center"
                onClick={() => setOpen(false)}
              >
                Contact via Email
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
