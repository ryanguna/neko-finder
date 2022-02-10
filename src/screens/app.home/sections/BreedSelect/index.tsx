/**
 * Module Dependencies
 */
import '@screens/app.home/sections/BreedSelect/style.scss';

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import UiFormSelect from '@components/UiFormSelect';
import { getBreedTypes } from '@store/entities/breedTypes/breedTypeSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';

// Selectors
import { breedSelector } from '@store/entities/breeds/breedSelector';
import { breedTypeSelector } from '@store/entities/breedTypes/breedTypeSelector';

/**
 *
 * Contains a Select element that updates the selectedBreed state
 * @parent AppHome
 *
 */
function BreedSelect() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const breedTypes = useAppSelector(breedTypeSelector.getBreedTypes);
  const selectedBreedType = useAppSelector(
    breedTypeSelector.getSelectedBreedType,
  );
  const isBreedLoading = useAppSelector(
    breedSelector.getFetchBreedsLoadingState,
  );

  useEffect(() => {
    dispatch(getBreedTypes());
  }, [dispatch]);

  function handleBreedSelectionChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    event.preventDefault();

    if (event.target.value === '') {
      navigate({
        pathname: '/',
      });
    } else {
      navigate({
        pathname: '/',
        search: `?breed=${event.target.value}`,
      });
    }
  }

  return (
    <div className="breed-select-padding">
      <UiFormSelect
        label="Breeds"
        placeholder="Choose a breed"
        disabled={isBreedLoading}
        options={breedTypes}
        defaultValue={selectedBreedType}
        onChange={handleBreedSelectionChange}
      />
    </div>
  );
}

export default BreedSelect;
