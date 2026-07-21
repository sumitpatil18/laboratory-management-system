import Sidebar from "../../Components/Sidebar/Sidebar";
import Table from "../../Components/Table/Table";
import { adminSidebarItem } from "../../Data/sidebarMenu";
import "./ManageLaboratory.css";
import Card from "../../Components/Card/Card";

export default function ManageLaboratory() {
  return (
    <div className="manage-laboratory-page">
      <Sidebar menuItems={adminSidebarItem} />
      <div className="card-content">
        <h1>Manage Laboratory</h1>

        <p className="subtitle">Manage all registered laboratories.</p>
        <Card>
          <main className="manage-laboratory-content">
            <Table/>
          </main>
        </Card>
      </div>
    </div>
  );
}
