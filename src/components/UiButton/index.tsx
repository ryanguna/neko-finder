/**
 * Module Dependencies
 */
import '@components/UiButton/style.scss';

import Button from 'react-bootstrap/Button';

function UiButton(props: any) {
  const { sharp, description, ...other } = props;
  return (
    <Button className={sharp ? 'btn-sharp' : ''} {...other}>
      {props.children}
    </Button>
  );
}

export default UiButton;
