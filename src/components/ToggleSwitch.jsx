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
        <FaUniversity className="mr-2" /> Education
      </button>
      <button
        className={`switch ${
          options === "experience"
            ? "bg-white text-gray-900 shadow-sm"
            : "text-gray-600 "
        }`}
        onClick={() => onToggle("experience")}
      >
        <FaBriefcase className="mr-2" /> Experience
      </button>
    </div>
  );
};
export default ToggleSwitch;
