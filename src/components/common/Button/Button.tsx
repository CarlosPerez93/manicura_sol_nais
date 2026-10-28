import React from 'react';
import './Button.scss';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'instagram' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
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
  ...props
}) => {
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

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="button-icon button-icon--left" aria-hidden="true" size={size === 'lg' ? 20 : size === 'sm' ? 14 : 16} />}
      <span className="button-text">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="button-icon button-icon--right" aria-hidden="true" size={size === 'lg' ? 20 : size === 'sm' ? 14 : 16} />}
    </>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={classNames}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        aria-label={ariaLabel}
        onClick={onClick}
        {...props}
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
      {...props}
    >
      {content}
    </button>
  );
};
