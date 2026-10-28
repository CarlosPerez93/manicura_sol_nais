import React from 'react';
import './Badge.scss';

export const Badge = ({
  children,
  variant = 'gold', // 'gold' | 'rose' | 'neutral' | 'whatsapp'
  icon: Icon,
  className = '',
  ...props
}) => {
  return (
    <span className={`custom-badge custom-badge--${variant} ${className}`} {...props}>
      {Icon && <Icon className="badge-icon" size={13} aria-hidden="true" />}
      <span className="badge-content">{children}</span>
    </span>
  );
};
