// Mock product data for the catalog
export const products = [
  {
    id: 1,
    name: 'Piso emborrachado',
    rating: 2,
    category: 'Materiais',
    image: '/src/assets/piso-emborrachado.avif',
    imageAlt: '/src/assets/piso-emborrachado2.avif',
    brand: 'EcoFloor',
    certifications: ['LEED', 'ISO 14000'],
    conamaClass: 'B',
    endOfLife: 'Reciclagem',
    sustainabilityScore: 'medium',
    performance: {
      durabilityIdentified: true,
      researchCenter: false,
      responsibleChain: true
    },
    environmental: {
      rainwaterCapture: false,
      processReuse: true,
      onsiteTreatment: false
    },
    sustainability: {
      griReport: false,
      publishedPolicy: true,
      naturePreservation: false
    },
    packaging: 'recyclable',
    fireSafety: 'B',
    circularEconomy: 'waste-as-raw-material',
    technicalNorms: ['ABNT NBR 14833']
  },
  {
    id: 2,
    name: 'Porcelanato Esmaltado',
    rating: 2,
    category: 'Materiais',
    image: '/src/assets/porcelanato-esmaltado.avif',
    imageAlt: '/src/assets/porcelanato-esmaltado2.avif',
    brand: 'Cerâmica Portinari',
    certifications: ['AQUA', 'PBQP-H'],
    conamaClass: 'A',
    endOfLife: 'Reutilização',
    sustainabilityScore: 'high',
    performance: {
      durabilityIdentified: true,
      researchCenter: true,
      responsibleChain: false
    },
    environmental: {
      rainwaterCapture: true,
      processReuse: true,
      onsiteTreatment: true
    },
    sustainability: {
      griReport: true,
      publishedPolicy: true,
      naturePreservation: true
    },
    packaging: 'recyclable',
    fireSafety: 'A1',
    circularEconomy: 'both',
    technicalNorms: ['ABNT NBR 13818', 'ISO 13006']
  },
  {
    id: 3,
    name: 'Tinta Ecológica',
    rating: 2,
    category: 'Materiais',
    image: '/src/assets/tinta-ecologica.avif',
    imageAlt: '/src/assets/tinta-ecologica2.avif',
    brand: 'Suvinil',
    certifications: ['GBC', 'Rótulo ABNT'],
    conamaClass: 'B',
    endOfLife: 'Reciclagem',
    sustainabilityScore: 'medium',
    performance: {
      durabilityIdentified: true,
      researchCenter: false,
      responsibleChain: false
    },
    environmental: {
      rainwaterCapture: false,
      processReuse: false,
      onsiteTreatment: true
    },
    sustainability: {
      griReport: false,
      publishedPolicy: true,
      naturePreservation: false
    },
    packaging: 'recyclable',
    fireSafety: 'C',
    circularEconomy: null,
    technicalNorms: ['ABNT NBR 11702']
  },
  {
    id: 4,
    name: 'Tinta Ecológica Premium',
    rating: 2,
    category: 'Materiais',
    image: '/src/assets/tinta-ecologica2.avif',
    imageAlt: '/src/assets/tinta-ecologica.avif',
    brand: 'Coral',
    certifications: ['LEED', 'GBC'],
    conamaClass: 'B',
    endOfLife: 'Reciclagem',
    sustainabilityScore: 'medium',
    performance: {
      durabilityIdentified: true,
      researchCenter: true,
      responsibleChain: false
    },
    environmental: {
      rainwaterCapture: false,
      processReuse: true,
      onsiteTreatment: false
    },
    sustainability: {
      griReport: true,
      publishedPolicy: true,
      naturePreservation: true
    },
    packaging: 'recyclable',
    fireSafety: 'B',
    circularEconomy: 'waste-as-raw-material',
    technicalNorms: ['ABNT NBR 11702']
  },
  {
    id: 5,
    name: 'Tubo de drenagem - PEAD reciclado',
    rating: 3,
    category: 'Sistemas Construtivos',
    image: '/src/assets/tubo-de-drenagem-pead.avif',
    imageAlt: '/src/assets/tubo-de-drenagem-pead.avif',
    brand: 'Tigre',
    certifications: ['ISO 14000', 'GRI'],
    conamaClass: 'A',
    endOfLife: 'Reciclagem',
    sustainabilityScore: 'high',
    performance: {
      durabilityIdentified: true,
      researchCenter: true,
      responsibleChain: true
    },
    environmental: {
      rainwaterCapture: false,
      processReuse: true,
      onsiteTreatment: true
    },
    sustainability: {
      griReport: true,
      publishedPolicy: true,
      naturePreservation: false
    },
    packaging: 'returnable',
    fireSafety: 'B',
    circularEconomy: 'waste-as-raw-material',
    technicalNorms: ['ABNT NBR 15561']
  },
  {
    id: 6,
    name: 'SPLIT',
    rating: 1,
    category: 'Tecnologias e Instalações',
    image: '/src/assets/split.avif',
    imageAlt: '/src/assets/split.avif',
    brand: 'LG Electronics',
    certifications: ['PBQP-H'],
    conamaClass: 'C',
    endOfLife: 'Aterro controlado',
    sustainabilityScore: 'low',
    performance: {
      durabilityIdentified: false,
      researchCenter: true,
      responsibleChain: false
    },
    environmental: {
      rainwaterCapture: false,
      processReuse: false,
      onsiteTreatment: false
    },
    sustainability: {
      griReport: false,
      publishedPolicy: false,
      naturePreservation: false
    },
    packaging: 'recyclable',
    fireSafety: 'E',
    circularEconomy: null,
    technicalNorms: ['ABNT NBR 16401']
  },
  {
    id: 7,
    name: 'Estrutura Leve de Madeira (Wood Frame)',
    rating: 2,
    category: 'Sistemas Construtivos',
    image: '/src/assets/wood-frame.avif',
    imageAlt: '/src/assets/wood-frame.avif',
    brand: 'Tecverde',
    certifications: ['LEED', 'GBC', 'GRI'],
    conamaClass: 'A',
    endOfLife: 'Reutilização',
    sustainabilityScore: 'high',
    performance: {
      durabilityIdentified: true,
      researchCenter: false,
      responsibleChain: true
    },
    environmental: {
      rainwaterCapture: false,
      processReuse: true,
      onsiteTreatment: false
    },
    sustainability: {
      griReport: true,
      publishedPolicy: true,
      naturePreservation: true
    },
    packaging: 'none',
    fireSafety: 'C',
    circularEconomy: 'water-closed-loop',
    technicalNorms: ['ABNT NBR 7190']
  },
  {
    id: 8,
    name: 'Vergalhão CA25 ou 50',
    rating: 4,
    category: 'Materiais',
    image: '/src/assets/vergalhao.avif',
    imageAlt: '/src/assets/vergalhao.avif',
    brand: 'ArcelorMittal',
    certifications: ['LEED', 'PBQP-H', 'GRI'],
    conamaClass: 'B',
    endOfLife: 'Reciclagem',
    sustainabilityScore: 'high',
    performance: {
      durabilityIdentified: true,
      researchCenter: true,
      responsibleChain: true
    },
    environmental: {
      rainwaterCapture: true,
      processReuse: true,
      onsiteTreatment: true
    },
    sustainability: {
      griReport: true,
      publishedPolicy: true,
      naturePreservation: false
    },
    packaging: 'none',
    fireSafety: 'A1',
    circularEconomy: 'waste-as-raw-material',
    technicalNorms: ['ABNT NBR 7480', 'ISO 6892']
  },
  {
    id: 9,
    name: 'Válvula de Descarga',
    rating: 4,
    category: 'Tecnologias e Instalações',
    image: '/src/assets/valvula-de-descarga.avif',
    imageAlt: '/src/assets/valvula-de-descarga.avif',
    brand: 'Deca',
    certifications: ['AQUA', 'PBQP-H'],
    conamaClass: 'B',
    endOfLife: 'Reciclagem',
    sustainabilityScore: 'high',
    performance: {
      durabilityIdentified: true,
      researchCenter: true,
      responsibleChain: false
    },
    environmental: {
      rainwaterCapture: false,
      processReuse: true,
      onsiteTreatment: false
    },
    sustainability: {
      griReport: false,
      publishedPolicy: true,
      naturePreservation: false
    },
    packaging: 'recyclable',
    fireSafety: 'A2',
    circularEconomy: 'water-closed-loop',
    technicalNorms: ['ABNT NBR 15491']
  },
  {
    id: 10,
    name: 'Painel Ripado PVC',
    rating: 3,
    category: 'Design',
    image: '/src/assets/painel-ripado-pvc.avif',
    imageAlt: '/src/assets/painel-ripado-pvc.avif',
    brand: 'Fortlev',
    certifications: ['ISO 14000', 'HPD'],
    conamaClass: 'B',
    endOfLife: 'Reciclagem',
    sustainabilityScore: 'medium',
    performance: {
      durabilityIdentified: true,
      researchCenter: false,
      responsibleChain: false
    },
    environmental: {
      rainwaterCapture: false,
      processReuse: true,
      onsiteTreatment: false
    },
    sustainability: {
      griReport: false,
      publishedPolicy: true,
      naturePreservation: false
    },
    packaging: 'recyclable',
    fireSafety: 'D',
    circularEconomy: 'waste-as-raw-material',
    technicalNorms: ['ABNT NBR 6925']
  }
];

export const categories = [
  'Todos',
  'Materiais',
  'Sistemas Construtivos',
  'Tecnologias e Instalações',
  'Design'
];
