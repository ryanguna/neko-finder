/**
 * Module Dependencies
 */
import '@screens/app.breed-details/style.scss';

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

import UiButton from '@components/UiButton';

import { getBreedDetailById } from '@store/entities/breedDetail/breedDetailSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';

// Selectors
import { breedDetailSelector } from '@store/entities/breedDetail/breedDetailSelector';

/**
 *
 * Displays details of a selected breed.
 * [ name, origin, temperament, description, image ]
 *
 * Accessible by /breeds/{id} route
 *
 */
function AppBreedDetails() {
  const navigate = useNavigate();
  const pathParams = useParams();

  const breedDetail: any = useAppSelector(breedDetailSelector.getBreedDetails);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBreedDetailById({ id: pathParams.id }));
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  function goBack(): void {
    navigate(-1);
  }

  const listItems = [
    { name: 'Breed', value: breedDetail.name },
    { name: 'Origin', value: breedDetail.origin },
    { name: 'Temperament', value: breedDetail.temperament },
    { name: 'Description', value: breedDetail.description },
  ];

  return (
    <Container className="app-breed-detail-container">
      <Row className="justify-content-md-center">
        <Col sm={6} xs={12}>
          <Card>
            <Card.Header as="h5">
              <UiButton sharp={true} variant="secondary" onClick={goBack}>
                Back
              </UiButton>
            </Card.Header>

            <Card.Body>
              <Card.Img
                className="img-breed-detail-logo"
                variant="top"
                src={breedDetail.url}
              />
              <ListGroup as="ol">
                {listItems.map((listItem, index) => (
                  <ListGroup.Item
                    as="li"
                    key={index}
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{listItem.name}</div>
                      {listItem.value}
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AppBreedDetails;
