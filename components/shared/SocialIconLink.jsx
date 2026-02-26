import Link from 'next/link';
import React from 'react';

const baseClasses = 'rounded-full shadow-lg shadow-gray-400 p-4 sm:p-5 cursor-pointer';

const SocialIconLink = ({ href, icon: Icon, label, external = false, onClick, compact = false }) => {
  const handleMouse = (event, hovering) => {
    if (!window.Motion?.animate) return;
    window.Motion.animate(
      event.currentTarget,
      { transform: [hovering ? 'translateY(0px) scale(1)' : 'translateY(-6px) scale(1.06)'] },
      { duration: 0.2, fill: 'forwards', easing: 'ease-out' }
    );
  };

  const content = (
    <div
      onClick={onClick}
      onMouseEnter={(event) => handleMouse(event, true)}
      onMouseLeave={(event) => handleMouse(event, false)}
      className={compact ? baseClasses.replace('sm:p-5', 'p-3').replace('p-4', 'p-3') : baseClasses}
    >
      <Icon />
    </div>
  );

  if (external) {
    return (
      <a href={href} target='_blank' rel='noreferrer' aria-label={label}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={label}>
      {content}
    </Link>
  );
};

export default SocialIconLink;
