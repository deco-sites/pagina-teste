// NavigationBar.tsx (Deco component)

interface NavItem {
  label: string;
  href: string;
}

const NavigationBar = () => {
  const navigationItems: NavItem[] = [
    { label: 'INICIO', href: '#inicio' },
    { label: 'QUEM SOMOS', href: '#quemsomos' },
    { label: 'CONTATO', href: '#contato' },
    { label: 'PREÇO', href: '#preco' },        
    { label: 'PORQUE MIGRAR?', href: '#porquemigrar' },
  
  ];

  return (
    <nav
      className={`fixed top - 0 flex w - full flex - wrap items - center mx-auto w-full px-4 py-4 text-white bg-[#050B1D]/[.79] ${window.scrollY > 0 ? '@apply sticky' : ''
        }`}
    >
      <ul className="flex space-x-4">
        {navigationItems.map((item, index) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`px-4 py-2 flex-shrink-0 w-[783px] h-[1.5625rem] text-white font-['Inter'] text-xl font-bold leading-[normal] hover:text-blue ${index === navigationItems.length - 1 ? '' : 'border-r-2 border-white'
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