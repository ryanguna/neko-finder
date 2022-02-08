/**
 * Module Dependencies
 */
import '@/global.scss';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from '@screens/app';
import AppBreedDetails from '@screens/app.breed-details';
import AppHome from '@screens/app.home';

import { store } from '@store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route path="/breeds/:id" element={<AppBreedDetails />} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
