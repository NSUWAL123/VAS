import React from 'react'
import { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setUsername } from '../reducers/userdataSlice';
import { userInfo } from '../userData';
import { setUsernameLS } from '../services/LocalData';
import '../styles/LoginPageStyle.css'

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const username = useSelector((state:RootState) => state.userReducer.username)
  
  const onFinish = (values: any) => {  
    if (userInfo.username === values.username && userInfo.Password === values.password){
      dispatch(setUsername(values.username))
      setUsernameLS(values.username)
      navigate('/')
    }
    else{
      onFinishFailed('Username or password did not match.')
    }

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() =>{
    if (username){
      navigate('/')  
    }
  })

  return (
    <div className="main-container">
    <Form
      name="basic"
      labelCol={{ span: 9 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      // style={{backgroundColor: 'red', }}
      className='form-container'
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
        <Button type="primary" htmlType="submit"
        className='submit-btn'>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default LoginPage