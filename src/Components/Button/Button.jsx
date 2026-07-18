import "./Button.css";

export default function Button({ type, info }) {
  return (
    <>
      <button className="primary-btn" type={type}>{info}</button>
    </>
  );
}
