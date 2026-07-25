import "./PatientRegistration.css";
import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Card from "../../Components/Card/Card";
import InputField from "../../Components/InputField/InputField";
import LabId from "../../Components/LabId/LabId";
import { labUserSidebarItem } from "../../Data/SidebarMenu";
import SelectionList from "../../Components/SelectionList/SelectionList";
import { TitleName } from "../../Data/SelectionList";
import RadioBTN from "../../Components/RadioBTN/RadioBTN";
import { genderOption } from "../../Data/RadioButton";

export default function PatientRegistration() {
  const [title, setTitle] = useState("Select");

  const [gender, setGender] = useState("");

  const handleTitleChange = (e) => {
    const selectedTitle = e.target.value;

    setTitle(selectedTitle);

    const titleData = TitleName.find((item) => item.value === selectedTitle);

    if (titleData) {
      setGender(titleData.gender);
    }
  };

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
              <LabId />

              <InputField
                label="Enter Patient Name"
                type="text"
                placeholder="Enter Patient Name"
                className="patient-name"
              />

              <SelectionList
                label="Title"
                className="gender-select-in-lab"
                menuItems={TitleName}
              />

              <RadioBTN
                label="Gender"
                menuItems={genderOption}
                gender={gender}
                setGender={setGender}
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
