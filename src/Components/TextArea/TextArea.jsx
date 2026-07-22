import "./TextArea"

export default function TextArea({label,placeholder,className}){
    return (
        <>
        <div className="text-are-content">
            {label &&  <label>{label}</label>}
            <textarea placeholder="Enter the Address"></textarea>
        </div>
        
        </>
    )
}