import { useEffect, useState } from 'react';

/**
 * Detecta la sección visible en el viewport.
 * @param sectionIds IDs de las secciones a monitorizar.
 * @param offset Desplazamiento en px del punto de activación.
 */
export const useScrollSpy = (sectionIds: readonly string[], offset = 120): string => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    if (!sectionIds.length) return;

    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i -= 1) {
        const id = sectionIds[i];
        if (!id) continue;
        const element = document.getElementById(id);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};
