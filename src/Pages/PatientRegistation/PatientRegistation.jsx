import "./PatientRegistation.css";
import { labUserSidebarItem } from "../../Data/SidebarMenu";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Card from "../../Components/Card/Card"
import Inputfield from "../../Components/Inputfield/Inputfield";

export default function PatientRegistation() {
  return (
    <>
      <div className="Petirnt-reg-page">
        <Sidebar menuItems={labUserSidebarItem}/>
        
        <div className="Patient-content">
          <h1>Patient Registration</h1>
          <p className="subTitle-Patient">Welcome to Blood Laboratory Management System</p>
        
        <div className="card-outer-manage">
            <Card>
                <div className="card-inner-manage">
                  <Inputfield label="Enter Patient Name" type="text" 
                  placeholder="Enter Patient Name" className="patient-name"  />

                  <Inputfield label="Enter Age" type="number" 
                  placeholder="Enter Age" className="patient-age" />

                  <Inputfield label="Enter Mobile Number" type="number"
                  placeholder="Enter Mobile Number" />


                </div>

            </Card>
        </div>
      </div>
      </div>
    </>
  );
}
