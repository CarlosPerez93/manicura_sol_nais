import React from 'react';
import './SectionHeading.scss';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  className = '',
  light = false
}) => {
  return (
    <div className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''} ${className}`}>
      {badge && <div className="section-heading__badge">{badge}</div>}
      <h2 className="section-heading__title">
        {title}
        <span className="section-heading__brush-wrapper" aria-hidden="true">
          <svg className="section-heading__brush-stroke" viewBox="0 0 240 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3 12C45 4 125 3 237 14C175 11 95 12 40 16"
              stroke="url(#brushGrad)"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="brushGrad" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E8B4A2" stopOpacity="0.8" />
                <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.9" />
                <stop offset="1" stopColor="#C27D6B" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
};
