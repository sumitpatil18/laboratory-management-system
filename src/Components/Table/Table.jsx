import React from "react";
import "./Table.css";

const laboratories = [
  {
    id: 1,
    name: "City Diagnostic Center",
    code: "LAB001",
    owner: "Dr. Rajesh Sharma",
    email: "citylab@gmail.com",
    phone: "9876543210",
    city: "Mumbai",
    status: "Active",
  },
  {
    id: 2,
    name: "Health Care Lab",
    code: "LAB002",
    owner: "Dr. Amit Patil",
    email: "healthcare@gmail.com",
    phone: "9988776655",
    city: "Pune",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Modern Pathology",
    code: "LAB003",
    owner: "Dr. Sneha Joshi",
    email: "modernlab@gmail.com",
    phone: "9123456789",
    city: "Nagpur",
    status: "Active",
  },
];

const Table = ({title,subTitle}) => {
  return (
    
    <div className="manage-laboratory"> 

      {/* Header */}

      <div className="page-header">
        <div>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>

        <button className="add-btn">
          + Add Laboratory
        </button>
      </div>

      {/* Search */}

      <div className="search-section">

        <input
          type="text"
          placeholder="Search laboratory..."
        />

      </div>

      {/* Table */}

      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>ID</th>
              <th>Laboratory Name</th>
              <th>Code</th>
              <th>Owner</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {laboratories.map((lab) => (

              <tr key={lab.id}>
                
                <td>{lab.id}</td>

                <td>{lab.name}</td>

                <td>{lab.code}</td>

                <td>{lab.owner}</td>

                <td>{lab.email}</td>

                <td>{lab.phone}</td>

                <td>{lab.city}</td>

                <td>
                  <span
                    className={
                      lab.status === "Active"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {lab.status}
                  </span>
                </td>

                <td>

                  <button className="edit-btn">
                    Edit
                  </button>

                  <button className="delete-btn">
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Table;