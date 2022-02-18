import { classNames } from "../../utils";

const Tab = ({ location, active, setActive }) => {
  return (
    <button
      className={classNames(
        "w-full min-w-max p-2.5 font-medium text-emerald-700 rounded-lg hover:bg-emerald-600 hover:text-white",
        active?.name === location.name ? "bg-white shadow" : ""
      )}
      onClick={() => setActive(location)}
    >
      {location.name}
    </button>
  );
};

export default Tab;
