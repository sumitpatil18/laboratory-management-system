import "./ResetBTN.css";
export default function ResetBTN({ type, info }) {
  return (
    <>
      <div>
        <button className="reset-btn" type={type}>{info}</button>
      </div>
      
    </>
  );
}
