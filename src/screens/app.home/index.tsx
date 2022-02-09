/**
 * Module Dependencies
 */
import CatList from '@screens/app.home/sections/BreedList';
import CatListPagination from '@screens/app.home/sections/BreedListPagination';
import CatBreeds from '@screens/app.home/sections/BreedSelect';
import '@screens/app/style.scss';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { setSelectedBreed } from '@store/entities/breedTypes/breedTypeSlice';
import { useAppDispatch } from '@store/hooks';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function AppHome() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(setSelectedBreed({ selectedBreed: searchParams.get('breed') }));
  }, [searchParams]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <CatBreeds />
        </Col>
      </Row>
      <hr className="mt-1 mb-1" />
      <Row>
        <CatList />
      </Row>
      <hr className="mt-4 mb-3" />
      <Row className="justify-content-md-center">
        <Col md="auto">
          <CatListPagination />
        </Col>
      </Row>
    </Container>
  );
}

export default AppHome;
