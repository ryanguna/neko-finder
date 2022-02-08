/**
 * Module Dependencies
 */
import '@screens/app/style.scss';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';

import { clearBreeds, getBreedsById } from '@store/entities/breeds/breedSlice';

import * as React from 'react';

import breedSelector from '@store/entities/breeds/breedSelector';
import breedTypeSelector from '@store/entities/breedTypes/breedTypeSelector';

import _ from 'lodash';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BreedList() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const selectedBreedType = useAppSelector(
    breedTypeSelector.getSelectedBreedType,
  );
  const { currentPage } = useAppSelector(breedSelector.getBreedPagination);
  const breeds = useAppSelector(breedSelector.getBreeds);

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

  const goTo = (id: any) => (event: React.MouseEvent) => {
    event.preventDefault();
    navigate(`/breeds/${id}`);
  };

  return (
    <>
      {breeds.length > 0 ? (
        breeds.map((breed: any) => (
          <Card key={breed.id}>
            <Card.Img variant="top" src={breed.url} />
            <Card.Body>
              <Card.Title>Test</Card.Title>
              <Card.Text>{breed.id}</Card.Text>
              <Button variant="primary" onClick={goTo(breed.id)}>
                View details
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <div>No cats found</div>
      )}
    </>
  );
}

export default BreedList;
