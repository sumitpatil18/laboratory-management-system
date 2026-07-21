import "./SelectionList.css";
export default function SelectionList({ menuItems,className }) {
  return (
    <>
      <div className={`selection-list ${className || "" }`}>
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
