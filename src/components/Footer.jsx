import React from 'react';
import { Logo } from '../icons/Icons';

const footerColumns = [
  {
    title: "Brainly",
    link: "https://brainly-blond.vercel.app"
  },
  {
    title: "GrowX",
    link: "https://aiproductivity.netlify.app/"
  },
  {
    title: "Estate",
    link: "https://estatemohit.netlify.app/"
  },
];

function FooterColumn({ title, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <span className="text-sm font-sans hover:text-gray-300 transition">
        {title}
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-[#070912] text-white">
      <div className="mt-14 border-t border-white/10 pt-10 px-6 md:px-10 pb-10">
        <div className="flex flex-col md:flex-row gap-10 md:justify-evenly">

          <div className="space-y-4 max-w-md">
            <div className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-lg md:text-xl font-bold shadow-lg shadow-black/10">
              <Logo />
              <span>LetterLens</span>
            </div>

            <p className="text-sm text-slate-300 leading-6">
              No trackers. No ads. Just consistency.
            </p>

            <p className="text-sm font-bold">
              Crafted with <span className="text-rose-400">❤️</span> by{" "}
              <span>Mohit Parmar Soni</span>
            </p>

            <p className="text-sm text-gray-400">
              ©️ 2026 LetterLens. All Rights Reserved.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-gray-400 font-semibold">
              Other Products
            </div>

            <div className="flex flex-col gap-2">
              {footerColumns.map((column) => (
                <FooterColumn
                  key={column.title}
                  title={column.title}
                  link={column.link}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-gray-400 font-semibold">
              Useful Links
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-sans hover:text-gray-300 cursor-pointer">
                Terms & Conditions
              </span>
              <span className="text-sm font-sans hover:text-gray-300 cursor-pointer">
                Privacy Policy
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;