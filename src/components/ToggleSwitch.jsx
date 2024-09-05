import { FaBriefcase, FaUniversity } from "react-icons/fa";

const ToggleSwitch = ({ options, onToggle }) => {
  return (
    <div className="switch-container">
      <button
        className={`switch ${
          options === "education"
            ? "bg-white text-gray-900 shadow-sm"
            : "text-gray-600 "
        }`}
        onClick={() => onToggle("education")}
      >
        <FaUniversity className="mr-2 h-5 w-5" /> Education
      </button>
      <button
        className={`switch ${
          options === "experience"
            ? "bg-white text-gray-900 shadow-sm"
            : "text-gray-600 "
        }`}
        onClick={() => onToggle("experience")}
      >
        <FaBriefcase className="mr-2 h-5 w-5" /> Experience
      </button>
    </div>
  );
};
export default ToggleSwitch;
