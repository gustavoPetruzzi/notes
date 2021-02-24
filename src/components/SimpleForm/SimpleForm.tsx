import { Button, Form, Input } from 'antd';
import { InputType, InputValues } from '../../models/input-values';
import styles from './SimpleForm.module.scss';

interface Props {
  name: string,
  buttonName: String,
  values: InputValues[],
  isLoading: boolean,
  children: any,
  onSave(returnValue: any): void
  //Add onFinish failed handler
}



const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

export const SimpleForm = (props: Props) => {
  const [form] = Form.useForm();
  const { name, buttonName, values, isLoading, onSave } = props;
  return (
    <>
      <div className={styles.container}>
        <Form
          name={name}
          initialValues={{ remember: true}}
          onFinish={onSave}
          onFinishFailed={(error) => console.log(error)}
          {...layout}

        >
          {values.map(item => 
            <Form.Item
              key={item.name}
              label={item.label}
              name={item.name}
              rules={item.rules}
            >
              <Input type={item.type} />
            </Form.Item>
          )}
          <Button type="primary" htmlType="submit" loading={isLoading}>
            {buttonName}
          </Button>
        </Form>
      </div>
      {props.children}
    </>
  )  
}