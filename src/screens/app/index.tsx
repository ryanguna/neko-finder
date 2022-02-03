/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import * as React from 'react';

import UiNavbar from '@components/UiNavbar';

function App(props: ReactComponentWrapper) {
  return (
    <React.Fragment>
      <React.Fragment>
        <UiNavbar />
      </React.Fragment>

      {props.children}
    </React.Fragment>
  );
}

export default App;
