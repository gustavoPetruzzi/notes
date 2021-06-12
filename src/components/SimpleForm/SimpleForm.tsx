// import { Button, Form, Input } from 'antd';
import { InputValues } from '../../models/input-values';
import { useForm } from "react-hook-form";
import styles from './SimpleForm.module.scss';
import React from 'react';
import { ButtonType } from '../../models/button-type';

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
  const buttonColor = getColor(buttonType);
  const loadingIcon = isLoading ? 'is-loading' : '';
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
      <button className={`button ${buttonColor} ${loadingIcon}`}>
        { buttonName }
      </button>
      <>
        {props.children}
      </>
    </form>
  )
}

const getColor = (buttonType: ButtonType) => {
  const colors = {
    [ButtonType.Primary] : 'is-primary',
    [ButtonType.Link] : 'is-link',
    [ButtonType.Info] : 'is-info',
    [ButtonType.Success] : 'is-success',
    [ButtonType.Warning] : 'is-warning',
    [ButtonType.Danger] : 'is-danger',
    [ButtonType.Default] : 'is-white',
  };

  return colors[buttonType] || colors[ButtonType.Default];
}