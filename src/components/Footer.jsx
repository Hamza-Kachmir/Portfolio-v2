import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 text-center border-t border-border">
      <div className="flex items-center justify-center gap-3">
        <img src="/assets/logos/hkc.png" alt="Logo HKC" className="h-14" />
        <p className="text-secondary m-0 font-bold">
          © {new Date().getFullYear()} – Portfolio&nbsp;
          <a
            href="https://www.linkedin.com/in/hamza-kachmir/"
            target="_blank"
            rel="noreferrer"
            className="font-black text-accent hover:text-accent-hover transition-colors duration-300"
          >
            Hamza Kachmir
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;