import './AdvancedFilterPanel.css';

const certifications = ['LEED', 'AQUA', 'GBC', 'ISO 14000', 'PBQP-H', 'HPD', 'GRI', 'Rótulo ABNT'];

function AdvancedFilterPanel({ isOpen, filters, onFilterChange }) {
  const handleCertToggle = (cert) => {
    const newCerts = filters.certifications.includes(cert)
      ? filters.certifications.filter(c => c !== cert)
      : [...filters.certifications, cert];
    onFilterChange('certifications', newCerts);
  };

  return (
    <div className={`advanced-panel ${isOpen ? 'open' : ''}`}>
      <div className="adv-grid">
        <div className="adv-group">
          <label>Certificações ambientais</label>
          <div className="cert-chips">
            {certifications.map(cert => (
              <div
                key={cert}
                className={`cert-chip ${filters.certifications.includes(cert) ? 'sel' : ''}`}
                onClick={() => handleCertToggle(cert)}
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        <div className="adv-group">
          <label>Classe do resíduo (CONAMA 307)</label>
          <select
            value={filters.conamaClass || ''}
            onChange={(e) => onFilterChange('conamaClass', e.target.value || null)}
          >
            <option value="">Qualquer classe</option>
            <option value="A">Classe A — reutilizável/reciclável</option>
            <option value="B">Classe B — reciclável outras destinações</option>
            <option value="C">Classe C — sem tecnologia econômica</option>
            <option value="D">Classe D — perigoso</option>
          </select>
        </div>

        <div className="adv-group">
          <label>Destino fim de vida</label>
          <select
            value={filters.endOfLife || ''}
            onChange={(e) => onFilterChange('endOfLife', e.target.value || null)}
          >
            <option value="">Qualquer</option>
            <option value="Reciclagem">Reciclagem</option>
            <option value="Reutilização">Reutilização</option>
            <option value="Compostagem">Compostagem</option>
            <option value="Aterro controlado">Aterro controlado</option>
          </select>
        </div>

        <div className="adv-group">
          <label>Segurança ao fogo</label>
          <select
            value={filters.fireSafety || ''}
            onChange={(e) => onFilterChange('fireSafety', e.target.value || null)}
          >
            <option value="">Qualquer</option>
            <option value="A1">Classe A1 — incombustível</option>
            <option value="A2">Classe A2</option>
            <option value="B">Classe B</option>
            <option value="C">Classe C</option>
            <option value="D">Classe D</option>
            <option value="E">Classe E — altamente inflamável</option>
          </select>
        </div>

        <div className="adv-group">
          <label>Economia circular</label>
          <select
            value={filters.circularEconomy || ''}
            onChange={(e) => onFilterChange('circularEconomy', e.target.value || null)}
          >
            <option value="">Qualquer</option>
            <option value="water-closed-loop">Circuito fechado de água</option>
            <option value="waste-as-raw-material">Resíduo como matéria-prima</option>
            <option value="both">Ambos</option>
          </select>
        </div>

        <div className="adv-group">
          <label>Normas técnicas</label>
          <input
            type="text"
            placeholder="Ex: ABNT NBR 6118, ISO 6892…"
            value={filters.technicalNorms || ''}
            onChange={(e) => onFilterChange('technicalNorms', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default AdvancedFilterPanel;
