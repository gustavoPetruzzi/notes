// import { Button, Form, Input } from 'antd';
import { InputValues } from '../../models/input-values';
import { useForm } from "react-hook-form";
import styles from './SimpleForm.module.scss';
import React from 'react';
import { Button } from '../../ui/Button/Button';
import { ButtonType } from '../../ui/Button/button-type';

interface Props {
  buttonName: String,
  buttonType: ButtonType,
  values: InputValues[],
  isLoading: boolean,
  children: React.ReactNode,
  onSave(returnValue: any): void
  //Add onFinish failed handler
}

export const SimpleForm = (props: Props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { buttonName, values, isLoading, onSave, buttonType } = props;
  return (
    <form onSubmit={handleSubmit(onSave)}>
      {values.map(item =>
        <input 
          key={item.name}
          name={item.name}
          className={styles.input__field} 
          type={item.type} 
          ref={register({...item.rules})} 
          placeholder={item.label}
        />
      )}
      <Button
        type={buttonType}
      >
        {buttonName}
      </Button>
      <>
        {props.children}
      </>
    </form>
  )
}