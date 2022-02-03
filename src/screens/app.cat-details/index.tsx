/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import Container from 'react-bootstrap/Container';
import UiCardItemList from '@components/UiCardItemList';

const cats = [
  {
    id: 1,
    title: 'cat1',
    description: 'cat1',
  },
  {
    id: 2,
    title: 'cat2',
    description: 'cat2',
  },
  {
    id: 3,
    title: 'cat3',
    description: 'cat3',
  },
];

function AppCatDetails() {
  return (
    <Container>
      <UiCardItemList items={cats} />
    </Container>
  );
}

export default AppCatDetails;
