// NavigationBar.tsx (Deco component)

interface NavItem {
  label: string;
  href: string;
}

const NavigationBar = () => {
  const navigationItems: NavItem[] = [
    { label: 'INICIO', href: '#inicio' },
    { label: 'QUEM SOMOS', href: 'quemsomos' },
    { label: 'QUERO MIGRAR', href: 'queromigrar' },
    { label: 'CONTATO!', href: 'contato' },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between text-white w-full px-4 py-4 bg-indigo-500">
      <ul className="flex space-x-4">
        {navigationItems.map((item, index) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`px-4 py-2 text-white hover:bg-indigo-200 hover:text-yellow-200 ${index === navigationItems.length - 1 ? '' : 'border-r-2 border-white'
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

export default NavigationBar;