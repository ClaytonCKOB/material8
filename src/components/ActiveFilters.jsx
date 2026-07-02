import './ActiveFilters.css';

function ActiveFilters({ filters, onRemoveFilter, onClearAll }) {
  const activeFilters = [];

  // Collect all active filters
  if (filters.category && filters.category !== 'Todos') {
    activeFilters.push({ type: 'category', label: filters.category });
  }

  filters.certifications?.forEach(cert => {
    activeFilters.push({ type: 'certification', value: cert, label: cert });
  });

  if (filters.conamaClass) {
    activeFilters.push({
      type: 'conamaClass',
      label: `Classe ${filters.conamaClass} — CONAMA`
    });
  }

  if (filters.endOfLife) {
    activeFilters.push({ type: 'endOfLife', label: filters.endOfLife });
  }

  if (filters.fireSafety) {
    activeFilters.push({ type: 'fireSafety', label: `Segurança fogo: ${filters.fireSafety}` });
  }

  if (filters.circularEconomy) {
    const ceLabels = {
      'water-closed-loop': 'Circuito fechado água',
      'waste-as-raw-material': 'Resíduo como matéria-prima',
      'both': 'Economia circular ambos'
    };
    activeFilters.push({
      type: 'circularEconomy',
      label: ceLabels[filters.circularEconomy]
    });
  }

  if (filters.stars) {
    activeFilters.push({ type: 'stars', label: `${filters.stars}+ estrelas` });
  }

  filters.performance?.forEach(perf => {
    const perfLabels = {
      durabilityIdentified: 'Durabilidade identificada',
      researchCenter: 'Centro de pesquisa',
      responsibleChain: 'Cadeia responsável'
    };
    activeFilters.push({ type: 'performance', value: perf, label: perfLabels[perf] });
  });

  filters.environmental?.forEach(env => {
    const envLabels = {
      rainwaterCapture: 'Captação água chuva',
      processReuse: 'Reúso no processo',
      onsiteTreatment: 'Tratamento efluente'
    };
    activeFilters.push({ type: 'environmental', value: env, label: envLabels[env] });
  });

  filters.sustainability?.forEach(sust => {
    const sustLabels = {
      griReport: 'Relatório GRI',
      publishedPolicy: 'Política publicada',
      naturePreservation: 'Preservação natureza'
    };
    activeFilters.push({ type: 'sustainability', value: sust, label: sustLabels[sust] });
  });

  if (filters.packaging) {
    const packLabels = {
      none: 'Sem embalagem',
      recyclable: 'Embalagem reciclável',
      returnable: 'Embalagem retornável'
    };
    activeFilters.push({ type: 'packaging', label: packLabels[filters.packaging] });
  }

  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="active-filters">
      {activeFilters.map((filter, index) => (
        <div key={index} className="af-chip" onClick={() => onRemoveFilter(filter)}>
          {filter.label}
          <span>×</span>
        </div>
      ))}
      {activeFilters.length > 1 && (
        <button className="clear-all-btn" onClick={onClearAll}>
          Limpar tudo
        </button>
      )}
    </div>
  );
}

export default ActiveFilters;
