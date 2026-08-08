import "./Inputfield.css";

export default function Inputfield({ label, type, placeholder,className="" }) {
  return (
    <div className={`input-field ${className || ""}`}>
      {label && <label>{label}</label>}
      <input type={type} placeholder={placeholder}></input>
    </div>
  );
}
