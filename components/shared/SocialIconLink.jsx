import Link from 'next/link';
import React from 'react';

const baseClasses = 'rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300';

const SocialIconLink = ({ href, icon: Icon, label, external = false, onClick, compact = false }) => {
  const content = (
    <div onClick={onClick} className={compact ? baseClasses.replace('p-6', 'p-3') : baseClasses}>
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
