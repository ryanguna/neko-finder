/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { useNavigate } from 'react-router-dom';

function AppCatDetails() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Container>
      <Card className="text-center">
        <Card.Header>
          <Card.Img
            height="600"
            width="50"
            variant="top"
            src="https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg"
          />
        </Card.Header>
        <Card.Body>
          <Card.Title>Dummy cat name</Card.Title>
          <Card.Text>Dummy cat description</Card.Text>
          <Button variant="primary" onClick={goBack}>
            Go back
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AppCatDetails;
