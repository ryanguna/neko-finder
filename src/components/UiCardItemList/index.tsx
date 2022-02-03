/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import UiCardItem from '@components/UiCardItem';

function UiCardItemList(props: any) {
  return (
    <Row xs={1} md={2} className="g-4">
      {props.items.map((item: any) => (
        <Col key={item.id}>
          <UiCardItem
            key={item.id}
            title={item.title}
            description={item.description}
          />
        </Col>
      ))}
    </Row>
  );
}

export default UiCardItemList;
