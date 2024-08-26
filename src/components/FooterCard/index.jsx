/* eslint-disable react/prop-types */
const FooterCard = ({ title, icon, href, color }) => {
  return (
    <a
      href={href}
      className={`bg-white rounded-2xl w-52 h-44 mr-10 duration-500 ${
        color == "blue" ? "hover:bg-blue-600" : "hover:bg-gray-500"
      }`}
    >
      <div className=" h-full p-2 text-3xl flex flex-col justify-between">
        <span className="">
          <i className={icon}></i>
        </span>
        <p className="text-black ">{title}</p>
      </div>
    </a>
  );
};

export default FooterCard;
