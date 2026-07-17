import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar({ menuItems }) {
  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="logo-section">
        <h1>Blood Lab</h1>
        <p>Admin Management Panel</p>
      </div>

      {/* Menu */}
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
