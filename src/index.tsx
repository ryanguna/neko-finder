import ReactDOM from 'react-dom';
import '@/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '@screens/app';
import AppHome from '@screens/app.home';
import AppCatDetails from '@screens/app.cat-details';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="/cats" element={<AppCatDetails />} />
      </Routes>
    </App>
  </BrowserRouter>,
  document.getElementById('root'),
);
