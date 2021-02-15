import { Button, Form, Input } from 'antd';
import { SyntheticEvent, useState } from 'react';
import { LoginResponse } from '../../models/login-response';
import { login } from '../../utils/auth';
import styles from './Login.module.scss';
interface LoginProps {
  onSave(loginResponse: LoginResponse): void
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const Login = (props: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const loginResponse = await login(email, password);
      props.onSave(loginResponse);
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
          rules={[{ required: true, message: 'Please input your password'}]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item 
          // {...tailLayout}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
