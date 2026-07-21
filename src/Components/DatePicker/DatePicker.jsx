//import { useState } from "react"
import "./DatePicker.css";

export default function DatePicker({ value, onChange,className }) {
  //let [date,setDate]=useState("")
  return (
    <>
      <div className={className}>
        <input type="date" value={value} onChange={onChange} />
      </div>
    </>
  );
}
