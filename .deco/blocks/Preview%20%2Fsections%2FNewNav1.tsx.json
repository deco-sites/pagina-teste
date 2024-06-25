import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

// Definindo as interfaces necessárias
interface NavItem {
  label: string;
  url: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
}

// Definindo itens de navegação padrão
const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Início', url: '/' },
  { label: 'Quem Somos', url: '#quem-somos' },
  { label: 'Contato', url: '#contato' },
  { label: 'Preços', url: '#precos' },
  { label: 'Por Que Migrar?', url: '#por-que-migrar' },
];

// Componente Navigation
const Navigation = ({ items = DEFAULT_NAV_ITEMS, ...props }: { items: NavItem[]; hoverBackgroundColor?: string; hoverTextColor?: string }) => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-4 bg-transparent">
      {items.map((item) => (
        <Link
          key={item.label}
          to={item.url}
          className={`flex items-center px-4 py-2 hover:bg-${props.hoverBackgroundColor || 'gray-200'} hover:text-${props.hoverTextColor || 'yellow-500'}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};


// Exportando o componente
export default Navigation;