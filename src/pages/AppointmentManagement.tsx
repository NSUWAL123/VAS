import React from "react";
import { Link } from "react-router-dom";
import "../styles/PatientManagementStyle.css";
import "../styles/AppointmentManagementStyle.css"
import { Button, DatePicker, Form, Input, Space, Table, Tag } from "antd";

const { Column, ColumnGroup } = Table;

const AppointmentManagement = () => {
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

  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };



  return (
    <div className="patient-manage-main">
      <div className="patient-manage-header">
        <h1>Appointment Management</h1>
        {/* <Link to="/registration" className="add-pat-link-reg">
          Add Appointment
        </Link> */}
      </div>
      <p>Create Appointment:</p>
      <Form
          name="form"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 5 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{ remember: true }}
          autoComplete="off"
          className = "appointment-create-form"
        >
          <Form.Item
            label={<h3>Patient Id</h3>}
            name="patientId"
            rules={[{ required: true, message: "Patient Id is Mandatory" }]}
          >
            <Input placeholder="" className="vaccine-reg-input" />
          </Form.Item>
          <Form.Item
            label={<h3>Service Name</h3>}
            name="servicename"
            rules={[{ required: true, message: "Service Name is Mandatory" }]}
          >
            <Input placeholder="" className="vaccine-reg-input" />
          </Form.Item>
          <Form.Item
            label={<h3>Site Location</h3>}
            name="sitelocation"
            rules={[{ required: true, message: "Site Location is Mandatory" }]}
          >
            <Input placeholder="" className="vaccine-reg-input" />
          </Form.Item>

          <Form.Item
            label={<h3>Appointment Date</h3>}
            name="startdate"
            rules={[{ required: true }]}
          >
            <DatePicker style={{ width: `${100}%` }} size="large" />
          </Form.Item>

          
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="submit-btn-app-create-reg"
            >
              <p>Create Appointment</p>
            </Button>
          </Form.Item>
        </Form>

        <h2>List of Appointments:</h2>
      <Table dataSource={data} className="patient-table">
        <Column
          title={<p className="table-header">Appointment ID</p>}
          dataIndex="patientID"
          key="patientID"
          className="table-cell"
          align="center"
        />
        <Column
          title={<p className="table-header">Site Location</p>}
          dataIndex="siteLocation"
          key="siteLocation"
          className="table-cell"
          align="center"
        />
        <Column
          title={<p className="table-header">Patient ID</p>}
          dataIndex="patientId"
          key="patientId"
          className="table-cell"
          align="center"
        />
        <Column
          title={<p className="table-header">Service Type</p>}
          dataIndex="serviceType"
          key="serviceType"
          className="table-cell"
          align="center"
        />
        <Column
          title={<p className="table-header">Confirmation Code</p>}
          dataIndex="confirmationCode"
          key="confirmationCode"
          className="table-cell"
          align="center"
        />

        <Column
          title={<p className="table-header">Action</p>}
          key="action"
          align="center"
          render={(_: any, record: DataType) => (
            <Space size="middle">
              <Link to="/appointment" className="table-cell">
                Edit
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

export default AppointmentManagement;
