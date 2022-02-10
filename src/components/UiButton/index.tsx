/**
 * Module Dependencies
 */
import '@components/UiButton/style.scss';
import Button from 'react-bootstrap/Button';

import { IReactComponentWrapper } from '@/types/global';

interface IUiButton extends IReactComponentWrapper {
  sharp?: boolean;
  description?: string;
  variant?: string;
  disabled?: boolean;
  onClick?: any;
}

/**
 * Custom button extension based from bootstrap Button
 */
function UiButton(props: IUiButton) {
  const { sharp, description, ...other } = props;
  return (
    <Button className={sharp ? 'btn-sharp' : ''} {...other}>
      {props.children}
    </Button>
  );
}

export default UiButton;
