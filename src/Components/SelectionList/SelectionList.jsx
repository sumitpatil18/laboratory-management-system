import "./SelectionList.css";
export default function SelectionList({ menuItems }) {
  return (
    <>
      <select>
        {menuItems.map((item, index) => (
          <option key={index} value={item.value}>
            {item.info}
          </option>
        ))}
      </select>
    </>
  );
}
