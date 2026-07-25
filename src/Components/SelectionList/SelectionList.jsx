import "./SelectionList.css";
export default function SelectionList({ label,menuItems,className,value,onChange }) {
  return (
    <>
      <div className={`selection-list ${className || "" }`}>
        {
         label && <label>{label}</label>
        }
        <select value={value} onChange={onChange}
>
          {menuItems.map((item, index) => (
            <option key={item.value} value={item.value}>
              {item.info}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
