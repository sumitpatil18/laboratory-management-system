import "./SelectionList.css";
export default function SelectionList({ label,menuItems,className }) {
  return (
    <>
      <div className={`selection-list ${className || "" }`}>
        {
         label && <label>{label}</label>
        }
        <select>
          {menuItems.map((item, index) => (
            <option key={index} value={item.value}>
              {item.info}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
