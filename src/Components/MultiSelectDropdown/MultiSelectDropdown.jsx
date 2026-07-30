import { useState } from "react";
import "./MultiSelectDropdown.css";

export default function MultiSelectDropdown({
  options = [],
  label = "Select Options",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="multi-select-container">
      <label className="multi-label">{label}</label>

      <div className="multi-select-box" onClick={() => setIsOpen(!isOpen)}>
        {selectedOptions.length > 0
          ? selectedOptions.join(", ")
          : "Select Option"}

        <span>▼</span>
      </div>

      {isOpen && (
        <div className="multi-option-list">
          {options.map((option, index) => (
            <label key={index} className="option-item">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />

              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
