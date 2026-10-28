import { useCallback, useEffect, useState } from 'react';
import type { UseModalResult } from '../types/ui';

/**
 * Estado de un modal con cierre por Escape y bloqueo de scroll.
 * Genérico en `T`: cada modal decide qué datos transporta.
 */
export const useModal = <T,>(initialState = false): UseModalResult<T> => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [modalData, setModalData] = useState<T | null>(null);

  const openModal = useCallback((data?: T) => {
    setModalData(data ?? null);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalData(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

  return { isOpen, modalData, openModal, closeModal };
};
