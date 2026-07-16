import Sidebar from "../../Components/Sidebar/Sidebar";
import Table from "../../Components/Table/Table";
import { adminSidebarItem } from "../../Data/sidebarMenu";

export default function ManageLaboratory(){
  return (
    <>
      <Sidebar
          menuItems={adminSidebarItem}
      />
      <Table 
      title="Manage Laboratory"
      subTitle="Manage all registered laboratories."
      />
    </>

  )
}