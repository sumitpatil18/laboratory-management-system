import "./Inputfield.css";

export default function Inputfield({ label, type, placeholder,className }) {
  return (
    <div className={'input-field ${className || ""}'}>
      <label>{label}</label>
      <input className={className}type={type} placeholder={placeholder}></input>
    </div>
  );
}
