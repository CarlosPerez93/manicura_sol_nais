import type { BadgeProps } from '../../../types/ui';
import './Badge.scss';

export const Badge = ({ children, variant = 'gold', icon: Icon, className = '', ...rest }: BadgeProps) => {
  return (
    <span className={`custom-badge custom-badge--${variant} ${className}`.trim()} {...rest}>
      {Icon && <Icon className="badge-icon" size={13} aria-hidden="true" />}
      <span className="badge-content">{children}</span>
    </span>
  );
};
