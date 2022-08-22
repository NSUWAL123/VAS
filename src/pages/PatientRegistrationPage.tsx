import React from "react";
import { Button, Form, Input, DatePicker, Radio, Upload } from "antd";
import { useDispatch } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";
import { addPatientData } from "../reducers/PatientDataSlice";
import "../styles/PatientRegistrationPageStyle.css";
import { useNavigate } from "react-router-dom";

const PatientForm = () => {
  const navigate = useNavigate();


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
    navigate('/login');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="patient-registration-main-container">
      <div className="reg-heading">
        <h1>Patient Registration</h1>
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
          label={<h3>First Name</h3>}
          name="firstname"
          rules={[{ required: true, message: "Please input your first name" }]}
        >
          <Input placeholder="First Name" className="patient-reg-input"/>
        </Form.Item>
        <Form.Item
          label={<h3>Last Name</h3>}
          name="lastname"
          rules={[{ required: true, message: "Please input your last name" }]}
        >
          <Input placeholder="Last Name" className="patient-reg-input"/>
        </Form.Item>

        <Form.Item
          label={<h3>Email</h3>}
          name="email"
          rules={[
            { required: true, message: "Please input your email adderss" },
            { type: "email", message: "Please enter valid email" },
          ]}
        >
          <Input placeholder="Email" className="patient-reg-input"/>
        </Form.Item>

        <Form.Item
          label={<h3>Password</h3>}
          name="street"
          rules={[{ required: true }]}
        >
          <Input placeholder="Password" className="patient-reg-input"/>
        </Form.Item> 
        
        <Form.Item
          label={<h3>DOB</h3>}
          name="DOB"
          rules={[
            { required: true, message: "Please enter your Date of Birth" },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label={<h3>Ethinicity</h3>}
          name="ethinicity"
          rules={[{ required: true, message: "Please input your ethinicity" }]}
        >
          <Input placeholder="Ethincity" className="patient-reg-input"/>
        </Form.Item>
        <Form.Item
          label={<h3>Gender</h3>}
          name="gender"
          rules={[{ required: true, message: "Please select your gender" }]}
        >
          <Radio.Group>
            <Radio value="male"><h2 className="patient-gender-checkb">Male</h2> </Radio>
            <Radio value="female"><h2 className="patient-gender-checkb">Female</h2></Radio>
            <Radio value="other"><h2 className="patient-gender-checkb">Other</h2></Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label={<h3>Street</h3>}
          name="street"
          rules={[{ required: true }]}
        >
          <Input placeholder="Street" className="patient-reg-input"/>
        </Form.Item>

        <Form.Item
          label={<h3>City</h3>}
          name="city"
          rules={[{ required: true }]}
          // style={{ display: "inline-block" }}
        >
          <Input placeholder="City" className="patient-reg-input"/>
        </Form.Item>
        <Form.Item
          label={<h3>State</h3>}
          name="state"
          rules={[{ required: true }]}
          // style={{ display: "inline-block" }}
        >
          <Input placeholder="State" className="patient-reg-input"/>
        </Form.Item>

        <Form.Item
          label={<h3>Insurance ID</h3>}
          name="insurance"
          rules={[{ required: true }]}
          // style={{ display: "inline-block" }}
        >
          <Input placeholder="Insurance ID" className="patient-reg-input"/>
        </Form.Item>
        <Form.Item
          label={<h3>Member ID</h3>}
          name="member"
          rules={[{ required: true }]}
          // style={{ display: "inline-block" }}
        >
          <Input placeholder="Member ID" className="patient-reg-input"/>
        </Form.Item>
        <Form.Item
          label={<h3>Insurance Provider</h3>}
          name="insuranceProvider"
          rules={[{ required: true }]}
          // style={{ display: "inline-block" }}
        >
          <Input placeholder="Insurance Provider" className="patient-reg-input"/>
        </Form.Item>

        <Form.Item label={<h3>Upload</h3>} valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <PlusOutlined />
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
          <Button type="primary" htmlType="submit" className="submit-btn-patient-reg">
            <p>Submit</p> 
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PatientForm;
