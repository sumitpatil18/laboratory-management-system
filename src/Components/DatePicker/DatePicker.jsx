//import { useState } from "react"
import "./DatePicker.css";

export default function DatePicker({ value, onChange }) {
  //let [date,setDate]=useState("")
  return (
    <>
      <div className="date-picker">
        <input type="date" value={value} onChange={onChange} />
      </div>
    </>
  );
}
