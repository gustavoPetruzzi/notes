import { Button, Form, Input } from 'antd';
import styles from './SimpleForm.module.scss';

interface Props {
  name: string,
  buttonName: String,
  values: inputValues[],
  isLoading: boolean,
  onSave<T>(returnValue: T): void
  //Add onFinish failed handler
}

interface inputValues {
  label: string,
  name: string,
  rules: inputRule[]
}

interface inputRule {
  required: boolean,
  message: string,
}

export const SimpleForm = (props: Props) => {
  const [form] = Form.useForm();
  const { name, buttonName, values, isLoading, onSave } = props;
  return (
    <div className={styles.container}>
      <Form
        name={name}
        initialValues={{ remember: true}}
        onFinish={onSave}
        onFinishFailed={(error) => console.log(error)}
      >
        {values.map(values => 
          return (
            <Form.item></Form.item>
          )
        )}
      </Form>
    </div>
  )  
}