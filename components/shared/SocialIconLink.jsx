import { Link } from '../../src/router';
import React from 'react';

const baseClasses = 'rounded-full shadow-lg shadow-gray-400 p-4 sm:p-5 cursor-pointer';

const SocialIconLink = ({ href, icon: Icon, label, external = false, onClick, compact = false }) => {
  const content = (
    <div
      onClick={onClick}
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
    <Link to={href} aria-label={label}>
      {content}
    </Link>
  );
};

export default SocialIconLink;
