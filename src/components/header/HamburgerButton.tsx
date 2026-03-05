interface Props {
  open: boolean;
  toggle: () => void;
}

const HamburgerButton = ({ toggle }: Props) => {
  return (
    <button
      className="text-white text-3xl"
      onClick={toggle}
    >
      ☰
    </button>
  );
};

export default HamburgerButton;