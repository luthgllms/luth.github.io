import '../styles/components.css';
import { useEffect, useState } from 'react';
import { AlignJustify, Sun, Moon } from 'lucide-react';

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  // Apply dark class to <html> tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  return (
    <header className="header">
      {/* left side: icon + site name */}
      <div className="left-section">
        <AlignJustify className="menu-icon" />
        <h1 className="site-title">luth.</h1>
      </div>

      {/* right side: search + archive */}
      <div className="right-section">
        {searchOpen ? (
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            onBlur={() => setSearchOpen(false)}
            autoFocus
          />
        ) : (
          <span className="search-text" onClick={() => setSearchOpen(true)}>
            Search
          </span>
        )}
        <a href="/archive" className="archive-link">
            Miscellaneous
        </a>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <Sun className="toggle-icon text-yellow-500" />
          ) : (
            <Moon className="toggle-icon text-gray-700" />
          )}
        </button>

      </div>
    </header>
  );
}
