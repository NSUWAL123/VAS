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
          <h1>Vaccine Service</h1>
        </div>
        <Form
          name="form"
          labelCol={{ span: 9 }}
          wrapperCol={{ span: 6 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
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
            label={<h3>Start Date</h3>}
            name="startdate"
            rules={[{ required: true }]}
          >
            <DatePicker style={{ width: `${100}%` }} size="large" />
          </Form.Item>

          <Form.Item
            label={<h3>End Date</h3>}
            name="enddate"
            rules={[{ required: true }]}
          >
            <DatePicker style={{ width: `${100}%` }} size="large" />
          </Form.Item>

          <Form.Item
            label={<h3>Dose Type</h3>}
            name="doseType"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Radio.Group>
              <Radio value="single">
                <p className="vaccine-gender-checkb">Single</p>
              </Radio>
              <Radio value="multiple">
                <p className="vaccine-gender-checkb">Multiple</p>
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label={<h3>End Date</h3>}
            name="gender"
            rules={[{ required: true }]}
          >
            <Radio.Group>
              <Radio value="male">
                <p className="vaccine-gender-checkb">Male</p>
              </Radio>
              <Radio value="female">
                <p className="vaccine-gender-checkb">Female</p>
              </Radio>
              <Radio value="both">
                <p className="vaccine-gender-checkb">Both</p>
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label={<h3>Age</h3>}
            name="age"
            rules={[{ required: true, message: "Age" }]}
          >
            <Input placeholder="" className="vaccine-reg-input" />
          </Form.Item>

          <Form.Item
            label={<h3>Ethinicity</h3>}
            name="ethinicity"
            rules={[
              { required: true, message: "Please input your ethinicity" },
            ]}
          >
            <Input placeholder="" className="vaccine-reg-input" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="submit-btn-vaccine-reg"
            >
              <p>Create Vaccination Service</p>
            </Button>
          </Form.Item>
        </Form>
      </div>


      <div className="patient-manage-main">

        <h2>List of Vaccines:</h2>
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
          title={<p className="table-header">Distribution Date</p>}
          dataIndex="distributionDate"
          key="distributionDate"
          className="table-cell"
          align="center"
        />
      
        <Column
          title={<p className="table-header">Doses</p>}
          dataIndex="doses"
          key="doses"
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
          title={<p className="table-header">Age</p>}
          dataIndex="age"
          key="age"
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
    </div>
  );
};

export default VaccineServices;
