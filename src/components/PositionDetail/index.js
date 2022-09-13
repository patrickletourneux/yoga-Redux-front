import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, Image } from 'semantic-ui-react';

function PositionDetail() {
  const params = useParams();

  const AllPositions = useSelector((state) => state.positions.allPositions);
  const position = AllPositions.find((item) => item.id === parseInt(params.id, 10));

  const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, 
  remaining essentially unchanged. It was popularised in the 1960s with the release of 
  Letraset sheets containing Lorem Ipsum passages, 
  and more recently with desktop publishing software like Aldus 
  PageMaker including versions of Lorem Ipsum.`;

  return (

    <Card
      centered
      fluid
    >
      <Image
        centered
        fluid
        src={position.img_url}
      />
      <Card.Content>
        <Card.Header>{position.english_name}</Card.Header>
        <Card.Description>
          {position.sanskrit_name}
        </Card.Description>
      </Card.Content>
      <Card.Content description={text} />
    </Card>
  );
}

PositionDetail.propTypes = {};

export default PositionDetail;
