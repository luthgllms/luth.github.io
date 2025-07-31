import '../styles/components.css';
import { useState } from 'react';
import { AlignJustify } from 'lucide-react';

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

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
          Archive
        </a>
      </div>
    </header>
  );
}
