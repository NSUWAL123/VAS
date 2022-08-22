import React from "react";
import { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setUsername } from "../reducers/userdataSlice";
import { userInfo } from "../userData";
import { setUsernameLS } from "../services/LocalData";
import "../styles/LoginPageStyle.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector(
    (state: RootState) => state.userReducer.username
  );

  const onFinish = (values: any) => {
    if (
      userInfo.username === values.username &&
      userInfo.Password === values.password
    ) {
      dispatch(setUsername(values.username));
      setUsernameLS(values.username);
      navigate("/");
    } else {
      onFinishFailed("Username or password did not match.");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (username) {
      navigate("/");
    }
  });

  return (
    <div className="login-main-container">
      <div className="left-login">
        <p className="welcome-login">WELCOME TO</p>
        <p className="contact-login">Vaccination Appointment System</p>
        <hr className="ruler-login" />
        <p className="message-login">Login to Access Dashboard</p>
      </div>
      <Form
        // form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 11 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="login-form"
      >
        <div className="login-heading">
          <h1>LOGIN</h1>
        </div>
        <Form.Item
          label={<h3>EMAIL</h3>}
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              type: "email",
            },
          ]}
          className="labels-login"
        >
          <Input className="input-login" />
        </Form.Item>

        <Form.Item
          label={<h3>PASSWORD</h3>}
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          className="labels-login"
        >
          <Input.Password className="input-login" />
        </Form.Item>
        <p></p>

        <Form.Item wrapperCol={{ offset: 11, span: 22 }}>
          <Button type="primary" htmlType="submit" className="login-btn">
            <p>LOGIN</p>
          </Button>
        </Form.Item>
        <div className="Reg-link">
          <p>Don't have an account?</p>
        <Link to="/registration" className="register-link">
          Register
        </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
