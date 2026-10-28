import type { PortfolioFilter, PortfolioWork } from '../types/domain';

// ==========================================
// SOLES NAILS - PORTFOLIO WORKS
// Basado en los trabajos y destacados del Instagram oficial
// ==========================================

export const PORTFOLIO_ITEMS: readonly PortfolioWork[] = [
  {
    id: 'work-1',
    title: 'Esmaltado Nude Rosé & Trazos Orgánicos',
    category: 'Nail Art',
    tag: 'Diseño a mano alzada',
    description: 'Trabajo real de Soles Nails: Base nude translúcida con líneas finas curvas, acabado limpio y refuerzo de uña natural.',
    finish: 'Brillo Espejo',
    duration: '75 min',
    image: '/images/nails/work-1.jpg',
    colors: ['#E8B4A2', '#FFFFFF', '#D4AF37'],
    gradient: 'linear-gradient(135deg, #F5D5CB 0%, #E8B4A2 50%, #C27D6B 100%)',
    featured: true
  },
  {
    id: 'work-2',
    title: 'Francesa Moderna Invertida con Micro-Glitter',
    category: 'Semipermanente',
    tag: 'Tendencia Clásica Renovada',
    description: 'Trabajo real de Soles Nails: Esmaltado semipermanente de máxima cobertura con sonrisa micro-fina y destellos luminosos.',
    finish: 'Glitter Shimmer',
    duration: '60 min',
    image: '/images/nails/work-2.jpg',
    colors: ['#FAF0EB', '#C27D6B', '#F3E5AB'],
    gradient: 'linear-gradient(135deg, #FAF0EB 0%, #E29578 60%, #8E4839 100%)',
    featured: true
  },
  {
    id: 'work-3',
    title: 'Glazed Donut Chrome Perlado',
    category: 'Minimalista',
    tag: 'Efecto Cromado',
    description: 'Trabajo real de Soles Nails: Efecto perla satinada reflectante sobre base milky white, logrando un brillo irisado sofisticado.',
    finish: 'Cromado Perlado',
    duration: '65 min',
    image: '/images/nails/work-3.jpg',
    colors: ['#FFFFFF', '#F0E6EF', '#D4AF37'],
    gradient: 'linear-gradient(135deg, #FFFFFF 0%, #EAE0D5 50%, #C6AC8F 100%)',
    featured: true
  },
  {
    id: 'work-4',
    title: 'Terracota Cálido & Refuerzo Kapping',
    category: 'Cuidado & Color',
    tag: 'Nivelación Estructural',
    description: 'Trabajo real de Soles Nails: Refuerzo sobre uña natural con tonalidad cálida, cutícula limpia y acabado ultra pulido.',
    finish: 'Ultra Gloss',
    duration: '70 min',
    image: '/images/nails/work-4.jpg',
    colors: ['#B85D43', '#8E3E26', '#E9C46A'],
    gradient: 'linear-gradient(135deg, #E76F51 0%, #B85D43 50%, #5E2616 100%)',
    featured: false
  },
  {
    id: 'work-5',
    title: 'Nail Art Botánico & Hojas Delicadas',
    category: 'Nail Art',
    tag: 'Mano Alzada',
    description: 'Trabajo real de Soles Nails: Detalle botánico pintado a pincel fino sobre uñas de acento con técnica combinada.',
    finish: 'Efecto Velvet Mate',
    duration: '85 min',
    image: '/images/nails/work-5.jpg',
    colors: ['#DDA15E', '#283618', '#FEFAE0'],
    gradient: 'linear-gradient(135deg, #DDA15E 0%, #606C38 60%, #283618 100%)',
    featured: true
  },
  {
    id: 'work-6',
    title: 'Rojo Borgoña Intenso & Corte Almendrado',
    category: 'Especial Eventos',
    tag: 'Elegancia Atemporal',
    description: 'Trabajo real de Soles Nails: Color vino tinto profundo de alta pigmentación con curvatura perfecta y brillo duradero.',
    finish: 'Gloss Espejo',
    duration: '65 min',
    image: '/images/nails/work-6.jpg',
    colors: ['#581825', '#800020', '#300810'],
    gradient: 'linear-gradient(135deg, #800020 0%, #581825 50%, #2A080C 100%)',
    featured: false
  }
];

export const PORTFOLIO_CATEGORIES: readonly PortfolioFilter[] = [
  'Todos',
  'Nail Art',
  'Semipermanente',
  'Minimalista',
  'Cuidado & Color',
  'Especial Eventos'
];
