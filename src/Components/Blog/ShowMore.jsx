import { NavLink } from "react-router-dom";

const ShowMore = ({ img, title, label, icon, url }) => {
  return (
    <li className="list-none w-full p-1 max-w-[360px]">
      <div className="h-full min-h-[360px] border border-slate-200 rounded-xl overflow-hidden shadow-lg bg-white hover:-translate-y-1 transition-all duration-300">
        <div className="h-48 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-3 text-left">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase font-semibold tracking-wide text-blue-600">{label}</span>
            <span className="text-sm text-slate-500 material-symbols-outlined">{icon}</span>
          </div>
          <h3 className="font-semibold text-base text-slate-800 mb-1">{title}</h3>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-indigo-600 hover:text-indigo-500"
          >
            View Project ↗
          </a>
        </div>
      </div>
    </li>
  );
};

export default ShowMore;