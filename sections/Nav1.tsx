/**
interface Props {
  /**
  * @description The description of name.
  
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  return <div>Hello {name}</div>
}

*/

import React from 'react';

interface NavItem {
  label: string;
  url: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Home', url: '#' },
  { label: 'News', url: '#' },
  { label: 'Contact', url: '#' },
];

const Navigation: React.FC<{ items?: NavItem[]; activeLabel?: string }> = ({
  items = DEFAULT_NAV_ITEMS,
  activeLabel,
}) => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 bg-gray-800">
      <div className="flex items-center">
        <h2 className="text-3xl font-bold text-white">Scroll Down</h2>
        <p className="ml-4 text-gray-400">Scroll down to see the sticky effect.</p>
      </div>
      <ul className="hidden md:flex space-x-4">
        {items.map((item) => (
          <li key={item.label} className="text-white hover:bg-gray-700">
            <a
              href={item.url}
              className={`px-3 py-2 rounded-full text-sm font-medium ${activeLabel === item.label ? 'bg-blue-500' : ''
                }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;