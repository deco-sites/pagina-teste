interface NavItem {
  label: string;
  href: string;
  isActive?: boolean; // Optional property for active link styling
}

const Navigation = ({ item }: { item: NavItem }) => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-4 bg-gray-800 fixed top-0 left-0 z-50">
      <ul className="flex space-x-4">
        <li key={item.label}>
          <Link
            href={item.href}
            className={`px-4 py-2 rounded text-white hover:bg-gray-700 ${item.isActive ? 'bg-blue-500 text-white' : ''}`}
          >
            {item.label}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;