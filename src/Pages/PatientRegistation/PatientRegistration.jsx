import "./PatientRegistration.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Card from "../../Components/Card/Card";
import InputField from "../../Components/InputField/InputField";
import LabId from "../../Components/LabId/LabId";
import { labUserSidebarItem } from "../../Data/SidebarMenu";
import SelectionList from "../../Components/SelectionList/SelectionList";
import {TitleName} from "../../Data/SelectionList"


export default function PatientRegistration() {
  return (
    <div className="patient-registration-page">
      {/* Sidebar */}

      <Sidebar menuItems={labUserSidebarItem} />

      {/* Main Content */}

      <main className="Patient-content">
        {/* Page Header */}

        <div className="patient-header">
          <h1>Patient Registration</h1>

          <p className="subTitle-Patient">
            Welcome to Blood Laboratory Management System
          </p>
        </div>

        {/* Registration Card */}

        <div className="card-outer-manage">
          <Card>
            <div className="card-inner-manage">
              <LabId/>

              <SelectionList label="Title" className="gender-select-in-lab" menuItems={TitleName}/>

              <InputField
                label="Enter Patient Name"
                type="text"
                placeholder="Enter Patient Name"
                className="patient-name"
              />

              <InputField
                label="Enter Age"
                type="number"
                placeholder="Enter Age"
                className="patient-age"
              />

              <InputField
                label="Enter Mobile Number"
                type="tel"
                placeholder="Enter Mobile Number"
                className="patient-mobile"
              />
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
