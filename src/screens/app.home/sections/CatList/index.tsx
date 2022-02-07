/**
 * Module Dependencies
 */
import '@screens/app/style.scss';
import UiCardItemList from '@components/UiCardItemList';
import { useNavigate } from 'react-router-dom';

function CatList(props: any) {
  const navigate = useNavigate();

  const dummyData = [
    {
      id: 1,
      title: 'cat1',
      breed: 'bambino',
      description: 'cat2',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Neighbours_Siamese.jpg/640px-Neighbours_Siamese.jpg',
      button: {
        description: 'View Details',
        action: '',
      },
    },
    {
      id: 2,
      title: 'cat1',
      breed: 'bambino',
      description: 'cat2',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Neighbours_Siamese.jpg/640px-Neighbours_Siamese.jpg',
      url: '',
      button: {
        description: 'View Details',
        action: '',
      },
    },
    {
      id: 3,
      title: 'cat3',
      description: 'cat3',
      breed: 'aegean',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Neighbours_Siamese.jpg/640px-Neighbours_Siamese.jpg',
      url: '',
      button: {
        description: 'View Details',
        action: '',
      },
    },
    {
      id: 4,
      title: 'cat4',
      description: 'cat4',
      breed: 'aegean',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Neighbours_Siamese.jpg/640px-Neighbours_Siamese.jpg',
      url: '',
      button: {
        description: 'View Details',
        action: '',
      },
    },
  ];

  const filteredCatsByBreed = dummyData
    .map((data) => ({
      ...data,
      navigateTo: () => navigate(`/cats/${data.id}`),
    }))
    .filter((cat) => cat.breed === props.selectedBreed);

  return <UiCardItemList items={filteredCatsByBreed} />;
}

export default CatList;
