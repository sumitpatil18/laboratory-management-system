import Sidebar from "../../Components/Sidebar/Sidebar";
import Inputfield from "../../Components/InputField/inputfield";

export default function CreateLaboratory(){
    return(
        <>
        <Sidebar/>
        <Inputfield 
        label="Laboratory Name"
        placeValue="Enter Laboratory Name"
        />
        <Inputfield
        label="Email Address"
        placeValue="Enter Email Address"/>
        <Inputfield 
        label="Phone Number"
        placeValue="Enter Phone Number"/>
        <Inputfield
        label="Username"
        placeValue="Enter Username"/>
        <Inputfield
        label="City"
        placeValue="Enter City"
        />
        <Inputfield
        label="Taluka"
        placeValue="Enter Taluka"/>
        <Inputfield
        label="District"
        placeValue="Enter District"/>
        <Inputfield
        label="Password"
        placeValue="Enter Password"/>
        <Inputfield
        label="Confirm Password"
        placeValue="Confirm Password"/>
        </>
    )
}