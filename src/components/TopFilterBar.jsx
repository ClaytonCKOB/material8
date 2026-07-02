import './TopFilterBar.css';

function TopFilterBar({ categories, selectedCategory, onCategoryChange, onToggleAdvanced, isAdvancedOpen }) {
  return (
    <div className="topbar">
      <span className="topbar-label">Categoria:</span>
      <div className="chip-group">
        {categories.map(category => (
          <div
            key={category}
            className={`chip ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <button className="advanced-btn" onClick={onToggleAdvanced}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 6l-4 4 4 4M10 6l-4 4 4 4"></path>
          <circle cx="6" cy="10" r="2"></circle>
          <circle cx="18" cy="14" r="2"></circle>
        </svg>
        Filtro avançado
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ transform: isAdvancedOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
  );
}

export default TopFilterBar;
