/**
 * Module Dependencies
 */
import '@components/UiButton/style.scss';

import { IReactComponentWrapper } from '@/types/global';
import Button from 'react-bootstrap/Button';

interface IUiButton extends IReactComponentWrapper {
  sharp?: boolean;
  description?: string;
  variant?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function UiButton(props: IUiButton) {
  const { sharp, description, ...other } = props;
  return (
    <Button className={sharp ? 'btn-sharp' : ''} {...other}>
      {props.children}
    </Button>
  );
}

export default UiButton;
