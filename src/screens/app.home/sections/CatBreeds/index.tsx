/**
 * Module Dependencies
 */
import '@screens/app/style.scss';
import UiFormSelect from '@components/UiFormSelect';
import { useNavigate } from 'react-router-dom';

function CatBreeds(props: any) {
  const navigate = useNavigate();

  const breeds = [
    { value: 'aegean', description: 'Aegean' },
    { value: 'bambino', description: 'Bambino' },
  ];

  const handleBreedSelectionChange = (event: any) =>
    navigate({
      pathname: '/',
      search: `?breed=${event.target.value}`,
    });

  return (
    <UiFormSelect
      placeholder="Default breed"
      options={breeds}
      defaultValue={props.selectedBreed}
      onChange={handleBreedSelectionChange}
    />
  );
}

export default CatBreeds;
