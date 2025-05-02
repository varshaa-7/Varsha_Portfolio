import { NavLink } from "react-router-dom";

const ShowMore = ({img, title, label, icon, url}) => {
  return (
    <li className="list-none mt-5 md:mt-0">
      <div className="max-w-72 max-h-72 shadow-xl rounded-lg group transition ease-in-out duration-700 hover:bg-purple-400 text-white font-semibold text-center overflow-hidden" key={title}>
        <p className="absolute opacity-0 p-2 translate-x-6 bg-red-500 rounded-b-lg transform duration-500 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0">
          {label}
        </p>
        <img className="aspect-square group-hover:opacity-5 rounded-lg" src={img} alt="artwork" />
        <div className="transition opacity-0 group-hover:opacity-100">
          <NavLink to={url} target="_blank">
            <div className="flex justify-center transition duration-500 -translate-y-24 group-hover:-translate-y-44 p-5">
              <span className="material-symbols-outlined">north_east</span>
              <span className="hover:underline">{title}</span>
            </div>
          </NavLink>
          <span className="material-symbols-outlined bg-yellow-400 p-2 rounded-full opacity-0 group-hover:opacity-100 -translate-x-24 -translate-y-32">
            {icon}
          </span>
        </div>         
      </div>
    </li>
  );
};

export default ShowMore;