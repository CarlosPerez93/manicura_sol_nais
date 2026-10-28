import { useCallback, useMemo, useState } from 'react';
import type { NailFinish, NailLength, NailShape } from '../types/domain';
import type { UseInteractiveQuoteResult } from '../types/ui';

export const NAIL_SHAPES: readonly NailShape[] = [
  { id: 'almendra', label: 'Almendra', icon: '🌰', desc: 'Estilizada y elegante' },
  { id: 'cuadrada', label: 'Cuadrada', icon: '⬛', desc: 'Clásica y resistente' },
  { id: 'ovalada', label: 'Ovalada', icon: '🥚', desc: 'Suave y natural' },
  { id: 'coffin', label: 'Bailarina / Coffin', icon: '🩰', desc: 'Tendencia moderna' }
];

export const NAIL_LENGTHS: readonly NailLength[] = [
  { id: 'corta', label: 'Corta / Natural', desc: 'Comodidad total para el día a día' },
  { id: 'media', label: 'Media', desc: 'Equilibrio perfecto entre estética y practicidad' },
  { id: 'larga', label: 'Larga / Estilizada', desc: 'Máximo impacto visual para nail art' }
];

export const NAIL_FINISHES: readonly NailFinish[] = [
  { id: 'gloss', label: 'Brillo Espejo (Ultra Gloss)', desc: 'Acabado cristal de alta durabilidad', sampleColor: '#E8B4A2' },
  { id: 'matte', label: 'Efecto Velvet Mate', desc: 'Tacto sedoso aterciopelado', sampleColor: '#C27D6B' },
  { id: 'glazed', label: 'Glazed Donut / Perla Cromada', desc: 'Reflejos irisados sutiles', sampleColor: '#F3E5AB' },
  { id: 'glitter', label: 'Micro-Glitter & Pan de Oro', desc: 'Destellos luminosos sofisticados', sampleColor: '#D4AF37' }
];

const BASE_DURATION_MIN = 60;
const LONG_NAIL_EXTRA_MIN = 15;
const NAIL_ART_EXTRA_MIN = 20;
const DURATION_RANGE_MIN = 15;

/** Fallback seguro: los índices se resuelven una sola vez. */
const firstOr = <T,>(items: readonly T[], index: number): T => {
  const item = items[index] ?? items[0];
  if (!item) throw new Error('El catálogo de manicura no puede estar vacío.');
  return item;
};

export const useInteractiveQuote = (): UseInteractiveQuoteResult => {
  const [selectedShape, setSelectedShape] = useState<NailShape>(() => firstOr(NAIL_SHAPES, 0));
  const [selectedLength, setSelectedLength] = useState<NailLength>(() => firstOr(NAIL_LENGTHS, 1));
  const [selectedFinish, setSelectedFinish] = useState<NailFinish>(() => firstOr(NAIL_FINISHES, 0));
  const [hasNailArt, setHasNailArt] = useState(true);

  const getEstimatedDuration = useCallback((): string => {
    let base = BASE_DURATION_MIN;
    if (selectedLength.id === 'larga') base += LONG_NAIL_EXTRA_MIN;
    if (hasNailArt) base += NAIL_ART_EXTRA_MIN;
    return `${base} - ${base + DURATION_RANGE_MIN} min aprox.`;
  }, [selectedLength.id, hasNailArt]);

  const getCustomSummary = useCallback((): string => {
    return `Forma: ${selectedShape.label} | Largo: ${selectedLength.label} | Acabado: ${selectedFinish.label} | ${
      hasNailArt ? 'Con Nail Art' : 'Color Liso'
    }`;
  }, [selectedShape.label, selectedLength.label, selectedFinish.label, hasNailArt]);

  return useMemo(
    () => ({
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
    }),
    [selectedShape, selectedLength, selectedFinish, hasNailArt, getEstimatedDuration, getCustomSummary]
  );
};
