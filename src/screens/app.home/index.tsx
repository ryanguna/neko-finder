/**
 * Module Dependencies
 */
import '@screens/app/style.scss';
import Container from 'react-bootstrap/Container';
import CatBreeds from '@screens/app.home/sections/CatBreeds';
import CatList from '@screens/app.home/sections/CatList';

import { useSearchParams } from 'react-router-dom';

function AppHome() {
  const [searchParams] = useSearchParams();
  const breed = searchParams.get('breed');

  return (
    <Container>
      <CatBreeds selectedBreed={breed} />
      <CatList selectedBreed={breed} />
    </Container>
  );
}

export default AppHome;
