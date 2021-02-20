import { Button, Form, Input, Spin } from 'antd';
import { SyntheticEvent, useState } from 'react';
import { LoginResponse } from '../../models/login-response';
import { User } from '../../models/user';
import styles from './Login.module.scss';

interface LoginProps {
  isLoading: boolean
  onSave(email:string, password:string): void
}


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const Login = (props: LoginProps) => {
  const [form] = Form.useForm();
  console.log(props.isLoading);

  const handleSubmit = async (values: any) => {
    try {
      console.log(values);
      const values2 =  await form.validateFields();
      console.log(values);
      props.onSave(values.email, values.password);
    } catch (error) { 
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <Form
        {...layout}
        name="login"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={(error) => console.log(error)}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email'
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { 
              required: true, 
              message: 'Please input your password'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item 
          // {...tailLayout}
        >
          <Button type="primary" htmlType="submit" loading={props.isLoading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
