/* eslint-disable react/prop-types */
const ServicesCard = ({ src, title, texts, bgTexts }) => {
  return (
    <div className="p-4">
      <div className="w-full flex justify-between items-start  mb-20">
        <p className="font-medium text-3xl">{title}</p>
        <img src={src} alt={title} className=" w-20 h-20 object-cover" />
      </div>
      <div className="flex flex-wrap gap-2 pr-60 lg:pr-28">
        {texts.map((item, index) => (
          <span
            key={index}
            className={`rounded-full text-black px-3 py-1 text-lg font-light `}
            style={{ backgroundColor: bgTexts }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
