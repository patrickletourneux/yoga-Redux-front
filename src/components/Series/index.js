import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react'
import  Serie from '../Serie'

function Series() {
  const allPositions = useSelector((state) => state.allPositions);
  return (
    <div >
      <Card.Group itemsPerRow={10}>
        {allPositions.map((item)=> (
          <Card 
          raised 
          image={item.img_url} 
          />
        ))}
      </Card.Group>
      <Serie/>
      <Serie/>
      <Serie/>
      <Serie/>
    </div>
  );
}

export default Series