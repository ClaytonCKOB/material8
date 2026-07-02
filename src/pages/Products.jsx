import { useState } from 'react';
import { products, categories } from '../data/mockProducts';
import TopFilterBar from '../components/TopFilterBar';
import AdvancedFilterPanel from '../components/AdvancedFilterPanel';
import ActiveFilters from '../components/ActiveFilters';
import './Products.css';

function Products() {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: 'Todos',
    certifications: [],
    conamaClass: null,
    endOfLife: null,
    fireSafety: null,
    circularEconomy: null,
    stars: null,
    performance: [],
    environmental: [],
    sustainability: [],
    packaging: null,
    technicalNorms: ''
  });
  const [sortBy, setSortBy] = useState('default');

  const handleCategoryChange = (category) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleCheckboxChange = (group, value) => {
    setFilters(prev => ({
      ...prev,
      [group]: prev[group].includes(value)
        ? prev[group].filter(v => v !== value)
        : [...prev[group], value]
    }));
  };

  const handleRemoveFilter = (filter) => {
    if (filter.type === 'category') {
      setFilters(prev => ({ ...prev, category: 'Todos' }));
    } else if (filter.type === 'certification') {
      setFilters(prev => ({
        ...prev,
        certifications: prev.certifications.filter(c => c !== filter.value)
      }));
    } else if (['performance', 'environmental', 'sustainability'].includes(filter.type)) {
      setFilters(prev => ({
        ...prev,
        [filter.type]: prev[filter.type].filter(v => v !== filter.value)
      }));
    } else {
      setFilters(prev => ({ ...prev, [filter.type]: null }));
    }
  };

  const handleClearAll = () => {
    setFilters({
      category: 'Todos',
      certifications: [],
      conamaClass: null,
      endOfLife: null,
      fireSafety: null,
      circularEconomy: null,
      stars: null,
      performance: [],
      environmental: [],
      sustainability: [],
      packaging: null,
      technicalNorms: ''
    });
  };

  const getBadgeColor = (cert) => {
    const greenBadges = ['LEED', 'GRI', 'ISO 14000', 'ISO 14001', 'GBC'];
    const blueBadges = ['AQUA', 'PBQP-H', 'HPD'];
    if (greenBadges.includes(cert)) return 'badge-green';
    if (blueBadges.includes(cert)) return 'badge-blue';
    return 'badge-amber';
  };

  const getScoreInfo = (product) => {
    const scores = {
      high: { dot: 'dot-green', text: `Classe ${product.conamaClass} · ${product.endOfLife}` },
      medium: { dot: 'dot-amber', text: `Classe ${product.conamaClass} · ${product.endOfLife}` },
      low: { dot: 'dot-gray', text: 'Certificação pendente' },
      none: { dot: 'dot-gray', text: 'Durabilidade s/ dados' }
    };
    return scores[product.sustainabilityScore] || scores.none;
  };

  // For now, no actual filtering - just display all products
  const filteredProducts = products;

  return (
    <div className="products-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="/src/assets/logo.avif" alt="Material8" />
        </div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/solucao">Solução</a>
          <a href="/pesquisar">Pesquisar</a>
          <a href="/cadastro">Cadastro</a>
          <a href="/quem-somos">Quem somos</a>
          <a href="/comunidade">Comunidade</a>
          <a href="/blog">Blog</a>
          <a href="/contato">Contato</a>
        </nav>
      </header>

      {/* Social and Login */}
      <div className="top-bar">
        <div className="social-links">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
        <button className="login-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          Login
        </button>
      </div>

      {/* Top Filter Bar */}
      <TopFilterBar
        categories={categories}
        selectedCategory={filters.category}
        onCategoryChange={handleCategoryChange}
        onToggleAdvanced={() => setIsAdvancedOpen(!isAdvancedOpen)}
        isAdvancedOpen={isAdvancedOpen}
      />

      {/* Advanced Filter Panel */}
      <AdvancedFilterPanel
        isOpen={isAdvancedOpen}
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      <div className="main-content">
        {/* Sidebar Filter */}
        <aside className="sidebar">
          <h2 className="filter-title">Filtro</h2>

          <div className="sb-section">
            <div className="sb-title">Desempenho</div>
            <label className="sb-row">
              <input
                type="checkbox"
                checked={filters.performance.includes('durabilityIdentified')}
                onChange={() => handleCheckboxChange('performance', 'durabilityIdentified')}
              />
              <span>Durabilidade identificada</span>
            </label>
            <label className="sb-row">
              <input
                type="checkbox"
                checked={filters.performance.includes('researchCenter')}
                onChange={() => handleCheckboxChange('performance', 'researchCenter')}
              />
              <span>Centro de pesquisa próprio</span>
            </label>
            <label className="sb-row">
              <input
                type="checkbox"
                checked={filters.performance.includes('responsibleChain')}
                onChange={() => handleCheckboxChange('performance', 'responsibleChain')}
              />
              <span>Responsável Steel / cadeia</span>
            </label>
          </div>

          <hr className="sb-divider" />

          <div className="sb-section">
            <div className="sb-title">Pontuação sustentável</div>
            <div className="star-row" onClick={() => handleFilterChange('stars', filters.stars === 5 ? null : 5)}>
              <span className="stars">★★★★★</span> 5 estrelas
            </div>
            <div className="star-row" onClick={() => handleFilterChange('stars', filters.stars === 4 ? null : 4)}>
              <span className="stars">★★★★</span><span className="stars-empty">★</span> 4+
            </div>
            <div className="star-row" onClick={() => handleFilterChange('stars', filters.stars === 3 ? null : 3)}>
              <span className="stars">★★★</span><span className="stars-empty">★★</span> 3+
            </div>
          </div>

          <hr className="sb-divider" />

          <div className="sb-section">
            <div className="sb-title">Ambiental — água</div>
            <label className="sb-row">
              <input
                type="checkbox"
                checked={filters.environmental.includes('rainwaterCapture')}
                onChange={() => handleCheckboxChange('environmental', 'rainwaterCapture')}
              />
              <span>Captação de água da chuva</span>
            </label>
            <label className="sb-row">
              <input
                type="checkbox"
                checked={filters.environmental.includes('processReuse')}
                onChange={() => handleCheckboxChange('environmental', 'processReuse')}
              />
              <span>Reúso no processo</span>
            </label>
            <label className="sb-row">
              <input
                type="checkbox"
                checked={filters.environmental.includes('onsiteTreatment')}
                onChange={() => handleCheckboxChange('environmental', 'onsiteTreatment')}
              />
              <span>Tratamento efluente in loco</span>
            </label>
          </div>

          <hr className="sb-divider" />

          <div className="sb-section">
            <div className="sb-title">Sustentabilidade</div>
            <label className="sb-row">
              <input
                type="checkbox"
                checked={filters.sustainability.includes('griReport')}
                onChange={() => handleCheckboxChange('sustainability', 'griReport')}
              />
              <span>Relatório GRI</span>
            </label>
            <label className="sb-row">
              <input
                type="checkbox"
                checked={filters.sustainability.includes('publishedPolicy')}
                onChange={() => handleCheckboxChange('sustainability', 'publishedPolicy')}
              />
              <span>Política publicada</span>
            </label>
            <label className="sb-row">
              <input
                type="checkbox"
                checked={filters.sustainability.includes('naturePreservation')}
                onChange={() => handleCheckboxChange('sustainability', 'naturePreservation')}
              />
              <span>Ações preservação natureza</span>
            </label>
            <span className="view-more">+ ver mais</span>
          </div>

          <hr className="sb-divider" />

          <div className="sb-section">
            <div className="sb-title">Embalagem</div>
            <label className="sb-row">
              <input
                type="radio"
                name="packaging"
                checked={filters.packaging === 'none'}
                onChange={() => handleFilterChange('packaging', 'none')}
              />
              <span>Sem embalagem</span>
            </label>
            <label className="sb-row">
              <input
                type="radio"
                name="packaging"
                checked={filters.packaging === 'recyclable'}
                onChange={() => handleFilterChange('packaging', 'recyclable')}
              />
              <span>Embalagem reciclável</span>
            </label>
            <label className="sb-row">
              <input
                type="radio"
                name="packaging"
                checked={filters.packaging === 'returnable'}
                onChange={() => handleFilterChange('packaging', 'returnable')}
              />
              <span>Embalagem retornável</span>
            </label>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="products-main">
          <ActiveFilters
            filters={filters}
            onRemoveFilter={handleRemoveFilter}
            onClearAll={handleClearAll}
          />

          <div className="products-header">
            <span className="results-count">{filteredProducts.length} produtos encontrados</span>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Ordenar: Mais relevantes</option>
              <option value="rating">Pontuação sustentável ↓</option>
              <option value="certifications">Certificações ↓</option>
              <option value="name">A–Z</option>
            </select>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => {
              const scoreInfo = getScoreInfo(product);
              return (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <span className="product-rating">
                      {product.rating} estrela{product.rating !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-brand">{product.brand}</div>
                  <div className="badge-row">
                    {product.certifications.map(cert => (
                      <span key={cert} className={`badge ${getBadgeColor(cert)}`}>
                        {cert}
                      </span>
                    ))}
                  </div>
                  <div className="product-score">
                    <span className={`score-dot ${scoreInfo.dot}`}></span>
                    {scoreInfo.text}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>

      {/* Chat Button */}
      <button className="chat-button" aria-label="Chat">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>
  );
}

export default Products;
