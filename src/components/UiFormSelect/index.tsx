/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import { IReactComponentWrapper } from '@/types/global';
import Form from 'react-bootstrap/Form';

interface IOption {
  value: string;
  description: string;
}

interface IUiFormSelect extends IReactComponentWrapper {
  placeholder?: string;
  defaultValue?: string;
  label?: string;
  id?: string;
  options: IOption[];
  disabled?: boolean;
  onChange?: any;
  'aria-label'?: string;
}

function UiFormSelect(props: IUiFormSelect) {
  const { placeholder, defaultValue, ...other } = props;

  return (
    <>
      {props.label ? (
        <Form.Label htmlFor={props.id || ''}>{props.label}</Form.Label>
      ) : (
        ''
      )}

      <Form.Select id={props.id || ''} {...other} value={defaultValue}>
        <option value="">{placeholder}</option>
        {props.options.map((option: any, index: any) => (
          <option key={index} value={option.value}>
            {option.description}
          </option>
        ))}
      </Form.Select>
    </>
  );
}
export default UiFormSelect;
