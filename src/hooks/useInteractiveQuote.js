import { useState } from 'react';

export const NAIL_SHAPES = [
  { id: 'almendra', label: 'Almendra', icon: '🌰', desc: 'Estilizada y elegante' },
  { id: 'cuadrada', label: 'Cuadrada', icon: '⬛', desc: 'Clásica y resistente' },
  { id: 'ovalada', label: 'Ovalada', icon: '🥚', desc: 'Suave y natural' },
  { id: 'coffin', label: 'Bailarina / Coffin', icon: '🩰', desc: 'Tendencia moderna' }
];

export const NAIL_LENGTHS = [
  { id: 'corta', label: 'Corta / Natural', desc: 'Comodidad total para el día a día' },
  { id: 'media', label: 'Media', desc: 'Equilibrio perfecto entre estética y practicidad' },
  { id: 'larga', label: 'Larga / Estilizada', desc: 'Máximo impacto visual para nail art' }
];

export const NAIL_FINISHES = [
  { id: 'gloss', label: 'Brillo Espejo (Ultra Gloss)', desc: 'Acabado cristal de alta durabilidad', sampleColor: '#E8B4A2' },
  { id: 'matte', label: 'Efecto Velvet Mate', desc: 'Tacto sedoso aterciopelado', sampleColor: '#C27D6B' },
  { id: 'glazed', label: 'Glazed Donut / Perla Cromada', desc: 'Reflejos irisados sutiles', sampleColor: '#F3E5AB' },
  { id: 'glitter', label: 'Micro-Glitter & Pan de Oro', desc: 'Destellos luminosos sofisticados', sampleColor: '#D4AF37' }
];

export const useInteractiveQuote = () => {
  const [selectedShape, setSelectedShape] = useState(NAIL_SHAPES[0]);
  const [selectedLength, setSelectedLength] = useState(NAIL_LENGTHS[1]);
  const [selectedFinish, setSelectedFinish] = useState(NAIL_FINISHES[0]);
  const [hasNailArt, setHasNailArt] = useState(true);

  const getEstimatedDuration = () => {
    let base = 60;
    if (selectedLength.id === 'larga') base += 15;
    if (hasNailArt) base += 20;
    return `${base} - ${base + 15} min aprox.`;
  };

  const getCustomSummary = () => {
    return `Forma: ${selectedShape.label} | Largo: ${selectedLength.label} | Acabado: ${selectedFinish.label} | ${hasNailArt ? 'Con Nail Art' : 'Color Liso'}`;
  };

  return {
    shapes: NAIL_SHAPES,
    lengths: NAIL_LENGTHS,
    finishes: NAIL_FINISHES,
    selectedShape,
    setSelectedShape,
    selectedLength,
    setSelectedLength,
    selectedFinish,
    setSelectedFinish,
    hasNailArt,
    setHasNailArt,
    estimatedDuration: getEstimatedDuration(),
    customSummary: getCustomSummary()
  };
};
