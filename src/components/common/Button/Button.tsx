import type { ComponentPropsWithoutRef } from 'react';
import type { ButtonProps } from '../../../types/ui';
import './Button.scss';

const ICON_SIZES = { sm: 14, md: 16, lg: 20 } as const;

/**
 * Botón o enlace con la misma apariencia.
 * OCP: las variantes se resuelven por clase, sin tocar la implementación.
 * LSP: el enlace cumple el mismo contrato de interacción que el botón.
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  href,
  target,
  rel,
  type = 'button',
  onClick,
  disabled = false,
  ariaLabel,
  ...rest
}: ButtonProps) => {
  const classNames = [
    'custom-button',
    `custom-button--${variant}`,
    `custom-button--${size}`,
    fullWidth ? 'custom-button--full' : '',
    disabled ? 'custom-button--disabled' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const iconSize = ICON_SIZES[size];

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="button-icon button-icon--left" aria-hidden="true" size={iconSize} />
      )}
      <span className="button-text">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="button-icon button-icon--right" aria-hidden="true" size={iconSize} />
      )}
    </>
  );

  if (href && !disabled) {
    const anchorProps = rest as ComponentPropsWithoutRef<'a'>;
    return (
      <a
        href={href}
        className={classNames}
        target={target}
        rel={target === '_blank' ? rel ?? 'noopener noreferrer' : rel}
        aria-label={ariaLabel}
        onClick={onClick}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...rest}
    >
      {content}
    </button>
  );
};
