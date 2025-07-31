import '../styles/components.css';
import { useEffect, useState } from 'react';
import { AlignJustify, Sun, Moon } from 'lucide-react';

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const [menuOpen, setMenuOpen] = useState(false); // for dropdown

  // apply dark class to <html> tag
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
      <div className="left-section relative">
        <AlignJustify
          className="menu-icon"
          onClick={() => setMenuOpen((prev) => !prev)} // toggle dropdown
        />
        <h1 className="site-title">luth.</h1>

        {/* dropdown menu */}
        {menuOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-section">
              <h3 className="dropdown-title">Projects</h3>
              <ul>
                <li>degentrifcAItion.mtl</li>
                <li>forest</li>
              </ul>
            </div>
            <div className="dropdown-section">
              <h3 className="dropdown-title">Hackathons</h3>
              <ul>
                <li>hack the north</li>
                <li>codejam</li>
              </ul>
            </div>
            <div className="dropdown-section">
              <h3 className="dropdown-title">Publications</h3>
              <ul>
                <li>coming soon</li>
              </ul>
            </div>
            <div className="dropdown-section">
              <h3 className="dropdown-title">Side Quests</h3>
              <ul>
                <li>chess tournaments</li>
                <li>films</li>
              </ul>
            </div>
          </div>
        )}
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

