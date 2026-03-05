interface Props {
  items: string[];
  close: () => void;
}

const MobileMenu = ({ items, close }: Props) => {
  return (
    <div className="bg-[#020b10]/95 border-t border-white/10">
      <nav className="flex flex-col px-6 py-4 gap-4">
        {items.map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-300 hover:text-white"
            onClick={close}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;