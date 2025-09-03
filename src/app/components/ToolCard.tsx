import React from 'react';

interface ToolCardProps {
  title: string;
  href: string;
  iconType: 'crm' | 'projects' | 'docs' | 'support' | 'analytics';
  isComingSoon?: boolean;
}

const iconColors = {
  crm: 'text-blue-600',
  projects: 'text-green-600',
  docs: 'text-purple-600',
  support: 'text-orange-600',
  analytics: 'text-red-600',
};

const renderIcon = (iconType: string, className: string) => {
  const baseProps = {
    className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    strokeWidth: 2
  };

  switch (iconType) {
    case 'crm':
      return (
        <svg {...baseProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'projects':
      return (
        <svg {...baseProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case 'docs':
      return (
        <svg {...baseProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case 'support':
      return (
        <svg {...baseProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case 'analytics':
      return (
        <svg {...baseProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    default:
      return (
        <svg {...baseProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      );
  }
};

export default function ToolCard({ title, href, iconType, isComingSoon = false }: ToolCardProps) {
  const iconColor = iconColors[iconType];

  return (
    <a
      href={href}
      className="relative block bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 group"
    >
      {/* Coming Soon Badge */}
      {isComingSoon && (
        <div className="absolute top-3 right-3 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full font-medium">
          Coming Soon
        </div>
      )}
      
      {/* Icon */}
      <div className="flex justify-center mb-4">
        {renderIcon(iconType, `w-12 h-12 ${iconColor} group-hover:scale-110 transition-transform duration-200`)}
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-bold text-center text-brand-text group-hover:text-brand-primary transition-colors duration-200">
        {title}
      </h3>
    </a>
  );
}