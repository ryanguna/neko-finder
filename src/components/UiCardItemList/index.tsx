/**
 * Module Dependencies
 */
import '@screens/app/style.scss';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import UiCardItem from '@components/UiCardItem';

function UiCardItemList(props: any) {
  return (
    <Row xs={1} md={2} className="g-4">
      {props.items.map((item: any) => (
        <Col key={item.id}>
          <UiCardItem
            key={item.id}
            id={item.id}
            title={item.title}
            url={item.url}
            navigateTo={item.navigateTo}
            buttonDescription={item.button.description}
            buttonAction={item.button.action}
            description={item.description}
          />
        </Col>
      ))}
    </Row>
  );
}

export default UiCardItemList;
