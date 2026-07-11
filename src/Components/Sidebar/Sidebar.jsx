import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      {/* Logo Section */}
      <div className="logo-section">
        <h1>Blood Lab</h1>
        <p>Admin Management Panel</p>
      </div>

      {/* Menu */}
      <ul className="menu"> 
        <li>
          <a href="#">Manage Laboratories</a>
        </li>

        <li>
          <a href="#">Create Laboratory</a>
        </li>

        <li>
          <a href="#">Monitor Data</a>
        </li>

        <li>
          <a href="#">Staff Manage</a>
        </li>

        <li className="logout">
          <a href="#">Logout</a>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;