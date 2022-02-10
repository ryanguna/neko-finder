/**
 * Module Dependencies
 */
import '@screens/app.home/sections/BreedList/style.scss';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';

import { clearBreeds, getBreedsById } from '@store/entities/breeds/breedSlice';

import * as React from 'react';

import LoadingBreedState from '@screens/app.home/sections/BreedList/LoadingBreedState';
import NoBreedFoundState from '@screens/app.home/sections/BreedList/NoBreedFoundState';
import breedSelector from '@store/entities/breeds/breedSelector';
import breedTypeSelector from '@store/entities/breedTypes/breedTypeSelector';

import UiButton from '@components/UiButton';
import _ from 'lodash';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function BreedList() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const selectedBreedType = useAppSelector(
    breedTypeSelector.getSelectedBreedType,
  );
  const { currentPage } = useAppSelector(breedSelector.getBreedPagination);
  const breeds = useAppSelector(breedSelector.getBreeds);
  const isLoading = useAppSelector(breedSelector.getFetchBreedsLoadingState);

  // On load and currentSelectedBreedType changes calculate display
  useEffect(() => {
    if (_.isEmpty(selectedBreedType)) {
      dispatch(clearBreeds());
    } else {
      dispatch(
        getBreedsById({
          id: selectedBreedType,
          page: currentPage,
        }),
      );
    }
  }, [selectedBreedType]);

  const goTo = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    navigate(`/breeds/${id}`);
  };

  return (
    <>
      <Container>
        <Row xs={1} sm={2} md={4} className="justify-content-md-center">
          {isLoading ? (
            <LoadingBreedState />
          ) : breeds.length > 0 ? (
            breeds.map((breed: any) => (
              <Col key={breed.id}>
                <Card className="breed-list-card">
                  <Card.Img
                    variant="top"
                    className="img-breed-logo"
                    src={breed.url}
                  />
                  <Card.Body>
                    <div className="d-grid gap-1">
                      <UiButton
                        sharp={true}
                        variant="outline-secondary"
                        onClick={goTo(breed.id)}
                      >
                        View details
                      </UiButton>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <>
              <NoBreedFoundState />
            </>
          )}
        </Row>
      </Container>
    </>
  );
}

export default BreedList;
