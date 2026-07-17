import "./Button.css";

export default function Button({ type, info }) {
  return (
    <>
      <button type={type}>{info}</button>
    </>
  );
}
