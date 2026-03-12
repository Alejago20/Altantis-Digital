interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}

const PortfolioCard = ({ title, description, image, link }: Props) => {
  return (
    <div className="bg-[#0d1a24] rounded-lg overflow-hidden border border-[#1e2a35] hover:border-sky-500 transition">

      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">

        <h3 className="text-white text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-slate-400 text-sm mb-4">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 text-sm hover:underline"
        >
          Ver sitio web
        </a>

      </div>

    </div>
  );
};

export default PortfolioCard;