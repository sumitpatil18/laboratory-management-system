import "./Inputfield.css";

export default function Inputfield({label,type,placeholder}){
    return(
        <div className="input-field">
            <label>{label}</label>
            <input type={type} placeholder={placeholder}></input>
        </div>
    )
}