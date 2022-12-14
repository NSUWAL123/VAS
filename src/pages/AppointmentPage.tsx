import React from "react";
import { Button, Form, Input, DatePicker, Radio, Upload, Checkbox, Table, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import '../styles/VaccineServiceStyle.css'
import Column from "antd/lib/table/Column";


const VaccineServices = () => {
  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

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
    <div>
      <div className="vaccine-registration-main-container">
        <div className="reg-heading">
          <h1>Book Appointment</h1>
        </div>
        <Form
          name="form"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 6 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          {/* <Form.Item
            label={<h3>Patient Id</h3>}
            name="patientId"
            rules={[{ required: true, message: "Patient Id is Mandatory" }]}
          >
            <Input placeholder="" className="vaccine-reg-input" />
          </Form.Item> */}
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

          <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="submit-btn-app-create-reg"
            >
              <p>Book Appointment</p>
            </Button>
            </Form.Item>
        </Form>
      </div>


      <div className="patient-manage-main">

        <h2>My Appointments:</h2>
      <Table dataSource={data} className="patient-table">
        <Column
          title={<p className="table-header">Service Name</p>}
          dataIndex="serviceName"
          key="serviceName"
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
            title={<p className="table-header">Date</p>}
            dataIndex="date"
            key="date"
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
        
      </Table>
    </div>
    </div>
  );
};

export default VaccineServices;
