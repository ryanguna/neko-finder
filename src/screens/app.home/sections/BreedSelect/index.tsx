/**
 * Module Dependencies
 */
import UiFormSelect from '@components/UiFormSelect';
import '@screens/app.home/sections/BreedSelect/style.scss';
import { useNavigate } from 'react-router-dom';

import { getBreedTypes } from '@store/entities/breedTypes/breedTypeSlice';

import breedTypeSelector from '@store/entities/breedTypes/breedTypeSelector';

import breedSelector from '@store/entities/breeds/breedSelector';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import React, { useEffect } from 'react';

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
