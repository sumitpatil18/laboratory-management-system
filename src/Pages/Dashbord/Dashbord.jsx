import { useState } from "react";

import "./Dashbord.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Card from "../../Components/Card/Card";
import Inputfield from "../../Components/InputField/inputfield";
import SelectionList from "../../Components/SelectionList/SelectionList";
import DatePicker from "../../Components/DatePicker/DatePicker";
import Button from "../../Components/Button/Button";
import ResetBTN from "../../Components/Button/ResetBTN";

import { labUserSidebarItem } from "../../Data/SidebarMenu";
import { bloodGroup, testNames, selectStatus } from "../../Data/SelectionList";

export default function Dashbord() {
  const [date, setDate] = useState("");

  return (
    <div className="dashboard-page">
      {/* Sidebar */}

      <Sidebar menuItems={labUserSidebarItem} />

      {/* Dashboard Main Content */}

      <main className="headline">
        {/* Page Header */}

        <div className="dashboard-header">
          <h1>Laboratory Dashboard</h1>

          <p className="subTitle-Dash">
            Welcome to Blood Laboratory Management System
          </p>
        </div>

        {/* Filter Card */}

        <div className="content">
          <Card>
            <div className="filter-container">
              <Inputfield
                className="filter-name"
                type="text"
                placeholder="Enter the Name"
              />

              <Inputfield
                className="filter-age"
                type="number"
                placeholder="Enter Age"
              />

              <SelectionList
                className="filter-blood-group"
                menuItems={bloodGroup}
              />

              <SelectionList
                className="filter-test-names"
                menuItems={testNames}
              />

              <DatePicker
                className="date-picker"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <SelectionList
                className="filter-status"
                menuItems={selectStatus}
              />

              <Button className="search-button" type="button" info="Search" />

              <ResetBTN className="reset-button" type="button" info="Reset" />
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
