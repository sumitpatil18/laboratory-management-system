export default function Inputfield({label,placeValue}){
    return(
        <>
        <div>
            <label>{label}</label>
            <input type="text" placeholder={placeValue}></input>
        </div>
        </>
    )
}