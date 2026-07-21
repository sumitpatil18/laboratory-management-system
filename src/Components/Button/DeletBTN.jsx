import "./DeleteBTN.css"

export default function DeleteBTN({className,type,info}){

    return(
        <>
            <button className={`delete-btn ${className || ""}` } type={type}>{info}</button>
        </>
    )
}