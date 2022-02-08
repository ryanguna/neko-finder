/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import { useAppDispatch, useAppSelector } from '@store/hooks';

import breedSelector from '@store/entities/breeds/breedSelector';
import {
  getPaginatedBreedsById,
  resetPagination,
} from '@store/entities/breeds/breedSlice';
import breedTypeSelector from '@store/entities/breedTypes/breedTypeSelector';

function BreedListPagination() {
  const selectedBreedType = useAppSelector(
    breedTypeSelector.getSelectedBreedType,
  );

  const { currentPage, isPaginationButtonHidden, isPaginationButtonLoading } =
    useAppSelector(breedSelector.getBreedPagination);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetPagination());
  }, [selectedBreedType]);

  const doPagination = () => (event: React.MouseEvent) => {
    event.preventDefault();

    return dispatch(
      getPaginatedBreedsById({
        id: selectedBreedType,
        currentPage,
      }),
    );
  };

  return (
    <>
      {isPaginationButtonHidden ? (
        ''
      ) : (
        <Button
          disabled={isPaginationButtonLoading}
          variant="success"
          onClick={doPagination()}
        >
          Load more
        </Button>
      )}
    </>
  );
}

export default BreedListPagination;
