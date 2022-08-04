import React from "react";
import { Button, Form, Input, DatePicker, Radio, Upload, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { addPatientData } from "../reducers/PatientDataSlice";
import "../styles/PatientRegistrationPageStyle.css";

const PatientForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    const formatedData = {
      firstName: values.firstname,
      lastName: values.lastname,
      dob: values.DOB.format("YYYY-MM-DD").toString(),
      gender: values.gender,
      ethinicity: values.ethinicity,
      street: values.street,
      state: values.state,
      city: values.city,
      insuranceId: values.insurance,
      memberId: values.member,
      insuranceProvider: values.member,
    };
    dispatch(addPatientData(formatedData));
    console.log(formatedData)
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="main-container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 6 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="firstname"
          rules={[{ required: true, message: "Please input your first name" }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastname"
          rules={[{ required: true, message: "Please input your last name" }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          label="DOB"
          name="DOB"
          rules={[
            { required: true, message: "Please enter your Date of Birth" },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Ethinicity"
          name="ethinicity"
          rules={[{ required: true, message: "Please input your ethinicity" }]}
        >
          <Input placeholder="Ethincity" />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please select your gender" }]}
        >
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email adderss" },
            { type: "email", message: "Please enter valid email" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Street"
          name="street"
          rules={[{ required: true }]}
          // style={{ display: "inline-block" }}
        >
          <Input placeholder="Street" />
        </Form.Item>
        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true }]}
          // style={{ display: "inline-block" }}
        >
          <Input placeholder="City" />
        </Form.Item>
        <Form.Item
          label="State"
          name="state"
          rules={[{ required: true }]}
          // style={{ display: "inline-block" }}
        >
          <Input placeholder="State" />
        </Form.Item>

        <Form.Item
          label="Insurance ID"
          name="insurance"
          rules={[{ required: true }]}
          // style={{ display: "inline-block" }}
        >
          <Input placeholder="Insurance ID" />
        </Form.Item>
        <Form.Item
          label="Member ID"
          name="member"
          rules={[{ required: true }]}
          // style={{ display: "inline-block" }}
        >
          <Input placeholder="Member ID" />
        </Form.Item>
        <Form.Item
          label="Insurance Provider"
          name="insuranceProvider"
          rules={[{ required: true }]}
          // style={{ display: "inline-block" }}
        >
          <Input placeholder="Insurance Provider" />
        </Form.Item>

        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <PlusOutlined />
          </Upload>
        </Form.Item>
        <Form.Item
          name="Confirm"
          valuePropName="checked"
          wrapperCol={{ offset: 5, span: 16 }}
          rules={[{ required: true, message: "Confirmation Required" }]}
        >
          <Checkbox>All the information I entered is true</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PatientForm;
