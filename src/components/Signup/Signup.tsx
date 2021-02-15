import { Button, Form, Input } from 'antd';
import { SyntheticEvent } from 'react';
import { User } from '../../models/user';

interface LoginProps {
  isLoading: boolean
  onSave(user: User): void
}

export const Signup = (props: LoginProps) => {
  const [form] = Form.useForm();
  console.log()
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }

  const handleSubmit = async () => {
    try {
      const values: User = await form.validateFields();
      props.onSave(values);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Form
        {...layout}
        name="signup"
        initialValues={{ remember: true }}
        onFinish={ handleSubmit }
        onFinishFailed={(error) => console.log(error)}
      >
        <Form.Item
          label="Nickname"
          name="nickname"
          rules={[
            {
              required: true,
              message: 'Please input your nickname'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input yout email'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules = {[
            {
              required: true,
              message: 'Please input your password'
            }
          ]}
        >
          <Input.Password/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={props.isLoading}>
            Signup
          </Button>
        </Form.Item>

      </Form>
    </div>
  )

}
