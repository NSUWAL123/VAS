import React from "react";
import { Link } from "react-router-dom";
import "../styles/PatientManagementStyle.css";
import { Space, Table, Tag } from "antd";

const { Column, ColumnGroup } = Table;

const PatientManagement = () => {
  interface DataType {
    key: React.Key;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    tags: string[];
  }

  const data: DataType[] = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div className="patient-manage-main">
      <div className="patient-manage-header">
        <h1>Patient Management</h1>
        <Link to="/registration" className="add-pat-link-reg">
          Add Patient
        </Link>
      </div>

        <h2>List of Patients:</h2>
      <Table dataSource={data} className="patient-table">
        <Column
          title={<p className="table-header">Patient ID</p>}
          dataIndex="patientID"
          key="patientID"
          className="table-cell"
          align="center"
        />
        <Column
          title={<p className="table-header">First Name</p>}
          dataIndex="firstName"
          key="firstName"
          className="table-cell"
          align="center"
        />
        <Column
          title={<p className="table-header">Last Name</p>}
          dataIndex="lastName"
          key="lastName"
          className="table-cell"
          align="center"
        />
        <Column
          title={<p className="table-header">Birth Date</p>}
          dataIndex="birthDate"
          key="birthDate"
          className="table-cell"
          align="center"
        />
        <Column
          title={<p className="table-header">Gender</p>}
          dataIndex="gender"
          key="gender"
          className="table-cell"
          align="center"
        />
        <Column
          title={<p className="table-header">Ethnicity</p>}
          dataIndex="ethnicity"
          key="ethnicity"
          className="table-cell"
          align="center"
        />
        <Column
          title={<p className="table-header">Action</p>}
          key="action"
          align="center"
          render={(_: any, record: DataType) => (
            <Space size="middle">
              <Link to="" className="table-cell">
                View
              </Link>
              <Link to="" className="table-cell">
                Remove
              </Link>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default PatientManagement;
