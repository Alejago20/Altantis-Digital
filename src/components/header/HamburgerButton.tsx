interface Props {
  open: boolean;
  toggle: () => void;
}

const HamburgerButton = ({ open, toggle }: Props) => {
  return (
    <button
      onClick={toggle}
      className="text-white text-3xl"
      aria-label="Abrir menú"
    >
      {open ? "✕" : "☰"}
    </button>
  );
};

export default HamburgerButton;