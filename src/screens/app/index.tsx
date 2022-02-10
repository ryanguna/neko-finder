/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import Container from 'react-bootstrap/Container';

import { IReactComponentWrapper } from '@/types/global';
import AppAlertError from '@screens/app/AppAlertError';
import AppHeader from '@screens/app/AppHeader';

/**
 * Main app layout
 */
function App(props: IReactComponentWrapper) {
  return (
    <>
      <AppHeader />
      <AppAlertError />
      <Container className="app-container" fluid={true}>
        {props.children}
      </Container>
    </>
  );
}

export default App;
