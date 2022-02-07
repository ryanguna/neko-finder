/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import * as React from 'react';

import AppHeader from '@screens/app/AppHeader';
import Container from 'react-bootstrap/Container';

function App(props: ReactComponentWrapper) {
  return (
    <React.Fragment>
      <AppHeader />

      <Container className="main-app-container" fluid={true}>
        {props.children}
      </Container>
    </React.Fragment>
  );
}

export default App;
