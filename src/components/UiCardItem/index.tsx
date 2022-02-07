/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UiCardItem(props: any) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary" onClick={props.navigateTo}>
          {props.buttonDescription}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UiCardItem;
