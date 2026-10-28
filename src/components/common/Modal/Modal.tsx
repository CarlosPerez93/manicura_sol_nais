import { useEffect, useRef, type MouseEvent } from 'react';
import { X } from 'lucide-react';
import type { ModalProps } from '../../../types/ui';
import './Modal.scss';

export const Modal = ({ isOpen, onClose, title, subtitle, children, maxWidth = '580px', ariaLabel }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleContainerClick = (event: MouseEvent<HTMLDivElement>): void => {
    event.stopPropagation();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal-container anim-scale-in"
        style={{ maxWidth }}
        onClick={handleContainerClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-label={title ? undefined : ariaLabel}
        tabIndex={-1}
        ref={modalRef}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar ventana emergente" type="button">
          <X size={20} aria-hidden="true" />
        </button>

        {(title || subtitle) && (
          <div className="modal-header">
            {title && (
              <h3 id="modal-title" className="modal-title">
                {title}
              </h3>
            )}
            {subtitle && <p className="modal-subtitle">{subtitle}</p>}
          </div>
        )}

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
