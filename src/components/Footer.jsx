import React from 'react';
import { Logo } from '../icons/Icons';
import _default from 'tailwindcss/colors';

const footerColumns = [
  {
        title:"Brainly",
        link:"https://brainly-blond.vercel.app"
    },{
        title:"GrowX",
        link:"https://aiproductivity.netlify.app/"
    },{
        title:"Estate",
        link:"https://estatemohit.netlify.app/"
    },
];

function FooterColumn({ title , link }) {
  return (
    <div>
        <a href={link} target="_blank">
            <span className='text-sm font-sans'>{title}</span>
        </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#070912] text-white">
        <div className="mt-14 border-t border-white/10 pt-10 p-10  gap-10 md:justify-evenly flex flex-row items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-xl font-bold text-white shadow-lg shadow-black/10">
            <span>
            <Logo/>
            </span>
              LetterLens
            </div>
            <p className="max-w-xl text-sm text-slate-300 leading-7">
              No trackers. No ads. Just consistency.
            </p>
            <p className="text-sm text-white font-bold">
              Crafted with <span className="text-rose-400">❤️</span> by <span className="text-white font-bold">Mohit Parmar Soni</span>
            </p>
            <p className='text-sm text-gray-400'>©️ 2026 LetterLens. All Rights Reserved.</p>
          </div>
          <div>
            <div className='text-gray-400 font-semibold'>Other Products</div>
          {footerColumns.map((column) => (
              <FooterColumn key={column.title} title={column.title} link={column.link}/>
            ))}
        </div>
        <div>
             <div className='text-gray-400 font-semibold mb-3'> Useful Link</div>
             <div className='flex gap-3 flex-col'>
             <div className='text-white text-sm font-sans'>Terms& Condition </div>
             <div className='text-white text-sm font-sans'v>Privacy Policy</div>
             </div>
        </div>
        </div>
    </footer>
  );
}

export default Footer;
