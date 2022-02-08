/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import Form from 'react-bootstrap/Form';

function UiFormSelect(props: any) {
  const { placeholder, defaultValue, ...other } = props;

  return (
    <Form.Select {...other} value={defaultValue} aria-label="Default select">
      <option value="">{placeholder}</option>
      {props.options.map((option: any, index: any) => (
        <option key={index} value={option.value}>
          {option.description}
        </option>
      ))}
    </Form.Select>
  );
}
export default UiFormSelect;
