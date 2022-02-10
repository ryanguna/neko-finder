/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import * as React from 'react';

import { IReactComponentWrapper } from '@/types/global';
import AppAlertError from '@screens/app/AppAlertError';
import AppHeader from '@screens/app/AppHeader';
import Container from 'react-bootstrap/Container';

function App(props: IReactComponentWrapper) {
  return (
    <React.Fragment>
      <AppHeader />
      <AppAlertError />
      <Container className="app-container" fluid={true}>
        {props.children}
      </Container>
    </React.Fragment>
  );
}

export default App;
