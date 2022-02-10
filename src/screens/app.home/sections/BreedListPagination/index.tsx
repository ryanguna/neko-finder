/**
 * Module Dependencies
 */
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import {
  getPaginatedBreedsById,
  resetPagination,
} from '@store/entities/breeds/breedSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';

// Selectors
import { breedSelector } from '@store/entities/breeds/breedSelector';
import { breedTypeSelector } from '@store/entities/breedTypes/breedTypeSelector';

/**
 *
 * Contains elements that paginates BreedList
 *
 * @parent AppHome
 *
 */
function BreedListPagination() {
  const selectedBreedType = useAppSelector(
    breedTypeSelector.getSelectedBreedType,
  );

  const { currentPage, isPaginationButtonHidden, isPaginationButtonLoading } =
    useAppSelector(breedSelector.getBreedPagination);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetPagination());
  }, [selectedBreedType]); // eslint-disable-line react-hooks/exhaustive-deps

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
          className="btn-sharp"
          disabled={isPaginationButtonLoading}
          variant="secondary"
          onClick={doPagination()}
        >
          Load more cats
        </Button>
      )}
    </>
  );
}

export default BreedListPagination;
