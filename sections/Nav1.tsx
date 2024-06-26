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
    <nav
      className={`fixed top - 0 flex w - full flex - wrap items - center mx-auto w-full px-4 py-4 text-yellow bg-indigo-700 ${window.scrollY > 0 ? '@apply sticky' : ''
        }`}
    >
      <ul className="flex space-x-4">
        {navigationItems.map((item, index) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`px-4 py-2 text-white hover:bg-blue-200 hover:text-yellow-200 ${index === navigationItems.length - 1 ? '' : 'border-r-2 border-white'
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

