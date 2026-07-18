import "./Dashbord.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Card from "../../Components/Card/Card";
import Inputfield from "../../Components/InputField/inputfield";
import { labUserSidebarItem } from "../../Data/sidebarMenu";
import { bloodGroup } from "../../Data/SelectionList";
import SelectionList from "../../Components/SelectionList/SelectionList";
import { testNames } from "../../Data/SelectionList";
import DatePicker from "../../Components/DatePicker/DatePicker";
import { useState } from "react";
import { selectStatus } from "../../Data/SelectionList";
import Button from "../../Components/Button/Button";
import ResetBTN from "../../Components/Button/ResetBTN";

export default function Dashbord() {
  const [date,setDate]=useState("")
  return (
    <>
      <Sidebar menuItems={labUserSidebarItem} />
      <div className="content">
        <Card>
          <Inputfield type="text" placeholder="Enter First Name" />
          <Inputfield type="text" placeholder="Enter Middle Name" />
          <Inputfield type="text" placeholder="Enter Last Name" />
          <Inputfield type="number" placeholder="Enter Age" />
          <SelectionList menuItems={bloodGroup} />
          <SelectionList menuItems={testNames} />
          <DatePicker 
          value={date}
          onChange={(e)=>setDate(e.target.value)}
          />
          <SelectionList menuItems={selectStatus}/>
          <Button type="button" info="Search"/>
          <ResetBTN type="button" info="Reset"/>
        </Card>
      </div>
    </>
  );
}
