/**
 * Module Dependencies
 */
import CatList from '@screens/app.home/sections/BreedList';
import CatListPagination from '@screens/app.home/sections/BreedListPagination';
import CatBreeds from '@screens/app.home/sections/BreedSelect';
import '@screens/app/style.scss';
import Container from 'react-bootstrap/Container';

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
      <CatBreeds />
      <CatList />
      <CatListPagination />
    </Container>
  );
}

export default AppHome;
