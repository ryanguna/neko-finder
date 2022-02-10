/**
 * Module Dependencies
 */
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import BreedList from '@screens/app.home/sections/BreedList';
import BreedListPagination from '@screens/app.home/sections/BreedListPagination';
import BreedSelect from '@screens/app.home/sections/BreedSelect';
import { setSelectedBreed } from '@store/entities/breedTypes/breedTypeSlice';
import { useAppDispatch } from '@store/hooks';

/**
 *
 * Parent layout for the home page
 *
 * @children [BreedSelect, BreedList, BreedListPagination]
 *
 * Accessible by / route
 *
 */
function AppHome() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  // Check on page load and listen to queryParam=breed changes to update the selectedBreed
  useEffect(() => {
    dispatch(setSelectedBreed({ selectedBreed: searchParams.get('breed') }));
  }, [searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <Row className="justify-content-md-center">
        <BreedSelect />
      </Row>
      <Row>
        <BreedList />
      </Row>
      <br />
      <Row className="justify-content-md-center">
        <Col md="auto">
          <BreedListPagination />
        </Col>
      </Row>
    </Container>
  );
}

export default AppHome;
