import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import "../styles/AppointmentPageStyle.css";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  TimePicker,
} from "antd";
import { dateToString, stringToDate, stringToTime, timeToString } from "../utils/common";
import type { RangePickerProps } from "antd/es/date-picker";
import moment from "moment";
import { useDispatch ,useSelector} from "react-redux";
import {DoseDate,Appointment} from "../Interface/AppointmentInterface"
import { registerAppointment } from "../reducers/AppointmentSlice";
import { RootState } from "../store";

// type SizeType = Parameters<typeof Form>[0]["size"];

const AppointmentPage: React.FC = () => {
//   const [componentSize, setComponentSize] = useState<SizeType | "default">(
//     "default"
//   );

//   const onFormLayoutChange = ({ size }: { size: SizeType }) => {
//     setComponentSize(size);
//   };

  const authInfo = useSelector((state: RootState) => state.userReducer);
  const appointmentInfo = useSelector((state: RootState) => state.appointment);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values:any) => {
    // console.log("time=",values.firstDose_time.format("HH:mm"))
    const firstDose:DoseDate={
      date: dateToString(values.firstDose_date),
      time: timeToString(values.firstDose_time),
    }
    const secondDose:DoseDate={
      date: dateToString(values.secondDose_date),
      time: timeToString(values.secondDose_time),
    }
    const info: Appointment = {
      id: "",
      siteLocation: values.siteLocation,
      service: values.service,
      firstDose: firstDose,
      secondDose: secondDose,
    };
    dispatch(registerAppointment(info));
    console.log("info is=",info)
    navigate("../component/AppointmentConfirmation");
  };

  const initialValue=appointmentInfo.siteLocation===""?{id:authInfo.username}:{
    id: authInfo.username,
    siteLocation: appointmentInfo.siteLocation,
    service: appointmentInfo.service,
    firstDose_date: stringToDate(appointmentInfo.firstDose.date),
    firstDose_time: stringToTime(appointmentInfo.firstDose.time),
    secondDose_date: stringToDate(appointmentInfo.secondDose.date),
    secondDose_time: stringToTime(appointmentInfo.secondDose.time),
  }


  //returns true by comparing current with day to be disabled.
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // return true;
    return current && current < moment().endOf("day");
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      onFinish={onFinish}
      layout="horizontal"
    //   onValuesChange={onFormLayoutChange}
    //   size={componentSize as SizeType}
      initialValues={initialValue}
    >

      <Form.Item name="id" label="ID">
        <Input />
      </Form.Item>

      <Form.Item name="siteLocation" label="Site location">
        <Select>
          <Select.Option value="Kathmandu">Kathmandu</Select.Option>
          <Select.Option value="Lalitpur">Lalitpur</Select.Option>
          <Select.Option value="Bhaktapur">Bhaktapur</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="service" label="Service">
        <Select>
          <Select.Option value="Janssen">Janssen (Johnson &amp; Johnson)</Select.Option>
          <Select.Option value="second_vaccine">second vaccine</Select.Option>
          <Select.Option value="third_vaccine">third vaccine</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="firstDose" label="1st Dose">
        <Input.Group compact>
      <Form.Item name={["firstDose_date"]}>

        <DatePicker
          disabledDate={disabledDate}
          dateRender={(current) => {
            const style: React.CSSProperties = {};
            //if dateToString(current) equal any of allowed date from "list of allowed date", then
            if (current.date() % 4 === 0) {
              style.border = "1px solid blue";
              style.borderRadius = "50%";
            }
            return (
              <div className="ant-picker-cell-inner" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
        </Form.Item>
      <Form.Item name={["firstDose_time"]}>

        <TimePicker minuteStep={30} secondStep={10} format="HH:mm"/>
        </Form.Item>

        </Input.Group>
      </Form.Item>

      {/* <Form.Item label="secondDose">
        <DatePicker
          disabledDate={disabledDate}
          dateRender={(current) => {
            const style: React.CSSProperties = {};
            console.log("current date=", current);

            //if dateToString(current) equal any of allowed date from "list of allowed date", then
            if (current.date() % 2 == 0) {
              style.border = "1px solid blue";
              style.borderRadius = "50%";
            }
            return (
              <div className="ant-picker-cell-inner" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
        <TimePicker use12Hours minuteStep={15} secondStep={10} />
      </Form.Item> */}

<Form.Item name="secondDose" label="1st Dose">
        <Input.Group compact>
      <Form.Item name={["secondDose_date"]}>

        <DatePicker
          disabledDate={disabledDate}
          dateRender={(current) => {
            const style: React.CSSProperties = {};
            //if dateToString(current) equal any of allowed date from "list of allowed date", then
            if (current.date() % 4 === 0) {
              style.border = "1px solid blue";
              style.borderRadius = "50%";
            }
            return (
              <div className="ant-picker-cell-inner" style={style}>
                {current.date()}
              </div>
            );
          }}
        />
        </Form.Item>
      <Form.Item name={["secondDose_time"]}>

        <TimePicker minuteStep={30} secondStep={10} format="HH:mm"/>
        </Form.Item>

        </Input.Group>
      </Form.Item>

      <Form.Item label="Button" >
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default AppointmentPage;

