import "./ResetBTN.css";
export default function ResetBTN({ className,type, info }) {
  return (
    <>
      <div>
        <button className={`reset-btn ${className || ""}`} type={type}>{info}</button>
      </div>
      
    </>
  );
}
