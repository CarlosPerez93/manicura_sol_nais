// ==========================================
// SOLES NAILS - UI TYPES
// Contratos de los componentes reutilizables y de los hooks.
// ==========================================

import type { ComponentPropsWithoutRef, ComponentType, ReactNode, SVGProps } from 'react';
import type { ContactFormData, ContactFormErrors, ContactSubmitOutcome } from './domain';

// ------------------------------------------
// Iconos
// ------------------------------------------

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  readonly size?: number;
  readonly className?: string;
}

/**
 * Icono aceptado por los componentes de UI. Cubre tanto lucide-react como los
 * iconos propios: sus firmas difieren en `size` (string | number vs number) y
 * en los atributos SVG admitidos, por lo que el contrato se mantiene abierto.
 */
export type IconComponent = ComponentType<any>;

// ------------------------------------------
// Button
// ------------------------------------------

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'instagram' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'onClick' | 'className' | 'children'> {
  readonly children: ReactNode;
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly icon?: IconComponent;
  readonly iconPosition?: 'left' | 'right';
  readonly fullWidth?: boolean;
  readonly className?: string;
  readonly ariaLabel?: string;
  readonly onClick?: () => void;
  /** Si se define, el componente se renderiza como enlace semántico. */
  readonly href?: string;
  readonly target?: '_blank' | '_self';
  readonly rel?: string;
}

// ------------------------------------------
// Badge
// ------------------------------------------

export type BadgeVariant = 'gold' | 'rose' | 'neutral' | 'whatsapp';

export interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  readonly children: ReactNode;
  readonly variant?: BadgeVariant;
  readonly icon?: IconComponent;
}

// ------------------------------------------
// Modal
// ------------------------------------------

export interface ModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly title?: string;
  readonly subtitle?: string;
  readonly children: ReactNode;
  readonly maxWidth?: string;
  readonly ariaLabel?: string;
}

// ------------------------------------------
// SectionHeading
// ------------------------------------------

export interface SectionHeadingProps {
  readonly badge?: ReactNode;
  readonly title: string;
  readonly subtitle?: string;
  readonly align?: 'center' | 'left';
  readonly className?: string;
  readonly light?: boolean;
}

// ------------------------------------------
// Toasts
// ------------------------------------------

export type ToastType = 'info' | 'success' | 'error' | 'warning';

export interface Toast {
  readonly id: string;
  readonly message: string;
  readonly type: ToastType;
}

export interface ToastContextValue {
  readonly addToast: (message: string, type?: ToastType, duration?: number) => void;
  readonly removeToast: (id: string) => void;
}

// ------------------------------------------
// Hooks
// ------------------------------------------

export interface UseModalResult<T> {
  readonly isOpen: boolean;
  readonly modalData: T | null;
  readonly openModal: (data?: T) => void;
  readonly closeModal: () => void;
}

export interface UseInteractiveQuoteResult {
  readonly selectedShape: import('./domain').NailShape;
  readonly selectedLength: import('./domain').NailLength;
  readonly selectedFinish: import('./domain').NailFinish;
  readonly hasNailArt: boolean;
  readonly shapes: readonly import('./domain').NailShape[];
  readonly lengths: readonly import('./domain').NailLength[];
  readonly finishes: readonly import('./domain').NailFinish[];
  readonly setSelectedShape: (shape: import('./domain').NailShape) => void;
  readonly setSelectedLength: (length: import('./domain').NailLength) => void;
  readonly setSelectedFinish: (finish: import('./domain').NailFinish) => void;
  readonly setHasNailArt: (value: boolean) => void;
  readonly estimatedDuration: string;
  readonly customSummary: string;
}

export interface UseContactFormResult {
  readonly formData: ContactFormData;
  readonly errors: ContactFormErrors;
  readonly isSubmitting: boolean;
  readonly isSuccess: boolean;
  readonly handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  readonly setService: (serviceTitle: string) => void;
  readonly handleSubmit: (event?: React.FormEvent<HTMLFormElement>) => Promise<ContactSubmitOutcome>;
  readonly sendToWhatsApp: () => void;
  readonly resetForm: () => void;
}
