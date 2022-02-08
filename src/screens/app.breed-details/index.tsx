/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import { getBreedDetailById } from '@store/entities/breedDetail/breedDetailSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';

import breedDetailSelector from '@store/entities/breedDetail/breedDetailSelector';

import { useNavigate, useParams } from 'react-router-dom';

function AppCatDetails() {
  const navigate = useNavigate();
  const pathParams = useParams();

  const breedDetail: any = useAppSelector(breedDetailSelector.getBreedDetails);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBreedDetailById({ id: pathParams.id }));
  }, [dispatch]);

  const goBack = () => navigate(-1);

  return (
    <Container>
      <Card className="text-center">
        <Card.Header>
          <Card.Img
            height="600"
            width="50"
            variant="top"
            src={breedDetail.url}
          />
        </Card.Header>
        <Card.Body>
          <Card.Title>{breedDetail.name}</Card.Title>
          <Card.Text>Origin: {breedDetail.origin}</Card.Text>
          <Card.Text>{breedDetail.temperament}</Card.Text>
          <Card.Text>{breedDetail.description}</Card.Text>
          <Button variant="primary" onClick={goBack}>
            Go back
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AppCatDetails;
