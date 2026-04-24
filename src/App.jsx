import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StatCard from './components/StatCard';
import Footer from './components/Footer';

function App() {
  const [text, setText] = useState('');
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Counting Logic
  const charCount = excludeSpaces ? text.replace(/\s/g, '').length : text.length;
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const sentenceCount = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(s => s.trim()).length;
  const paragraphCount = text.trim() === '' ? 0 : text.split(/\n+/).filter(p => p.trim()).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="min-h-screen bg-white dark:bg-[#111116] text-gray-900 dark:text-white transition-colors duration-300 font-sans">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-12 tracking-tight">
          Count Characters for SEO,<br />
          Writing, or Just for Fun!
        </h1>

        <div className="w-full relative">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="w-full h-64 p-6 rounded-2xl bg-gray-50 dark:bg-[#1a1a23] border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none text-lg"
          />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 gap-4">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={excludeSpaces}
                  onChange={() => setExcludeSpaces(!excludeSpaces)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded border-2 transition-colors ${excludeSpaces ? 'bg-purple-500 border-purple-500' : 'border-gray-400 dark:border-gray-600'}`}>
                  {excludeSpaces && (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                Exclude spaces
              </span>
            </label>
            
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Estimated Reading Time: {readingTime} {readingTime === 1 ? 'min' : 'mins'}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12">
          <StatCard 
            label="Total Characters" 
            value={charCount} 
            colorClass="bg-purple-400" 
          />
          <StatCard 
            label="Word Count" 
            value={wordCount} 
            colorClass="bg-yellow-400" 
          />
          <StatCard 
            label="Sentence Count" 
            value={sentenceCount} 
            colorClass="bg-orange-400" 
          />
          <StatCard 
            label="Paragraph" 
            value={paragraphCount} 
            colorClass="bg-blue-400" 
          />
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;
