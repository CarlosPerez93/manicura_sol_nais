import { useState, useEffect } from 'react';

/**
 * Hook para detectar la sección activa en el viewport
 * @param {string[]} sectionIds Lista de IDs de las secciones a monitorizar
 * @param {number} offset Desplazamiento en px para el trigger
 * @returns {string} ID de la sección actualmente activa
 */
export const useScrollSpy = (sectionIds = [], offset = 120) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};
