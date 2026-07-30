import "./ResetBTN.css";
export default function ResetBTN({ type, info,className }) {
  return (
    <>
        <button className={`reset-btn ${className || ""}`} type={type}>{info}</button>
    </>
  );
}
