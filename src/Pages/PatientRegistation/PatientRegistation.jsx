import "./PatientRegistation.css";
import { labUserSidebarItem } from "../../Data/SidebarMenu";
import Sidebar from "../../Components/Sidebar/Sidebar";

export default function PatientRegistation() {
  return (
    <>
      <div className="Petirnt-reg-page">
        <Sidebar menuItems={labUserSidebarItem}/>
        
        <div className="Patient-content">
          <h1>Patient Registration</h1>
          <p className="subTitle-Patient">Welcome to Blood Laboratory Management System</p>
        </div>
      </div>
    </>
  );
}
