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
      <Container className="app-container" fluid={true}>
        <AppHeader />
        {props.children}
      </Container>
    </React.Fragment>
  );
}

export default App;
