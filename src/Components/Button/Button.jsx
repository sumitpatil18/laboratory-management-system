import "./Button.css";

export default function Button({ type, info,className }) {
  return (
    <>
      <button className={`primary-btn ${className || ""}`} type={type}>{info}</button>
    </>
  );
}
