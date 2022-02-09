/**
 * Module Dependencies
 */
import UiFormSelect from '@components/UiFormSelect';
import '@screens/app.home/sections/BreedSelect/style.scss';
import { useNavigate } from 'react-router-dom';

import { getBreedTypes } from '@store/entities/breedTypes/breedTypeSlice';

import breedTypeSelector from '@store/entities/breedTypes/breedTypeSelector';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';

function BreedSelect() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const breedTypes = useAppSelector(breedTypeSelector.getBreedTypes);
  const selectedBreedType = useAppSelector(
    breedTypeSelector.getSelectedBreedType,
  );

  useEffect(() => {
    dispatch(getBreedTypes());
  }, [dispatch]);

  const handleBreedSelectionChange = (event: any) => {
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
  };

  return (
    <div className="breed-select-padding">
      <UiFormSelect
        label="Choose a breed"
        placeholder="Choose a breed"
        options={breedTypes}
        defaultValue={selectedBreedType}
        onChange={handleBreedSelectionChange}
      />
    </div>
  );
}

export default BreedSelect;
