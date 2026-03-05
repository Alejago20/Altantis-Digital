interface Props {
  items: string[];
}

const DesktopMenu = ({ items }: Props) => {
  return (
    <nav className="flex items-end gap-8">
      {items.map(item => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-white hover:text-sky-400"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default DesktopMenu;