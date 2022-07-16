import React , {useRef} from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
// import { useDrag , useDrop} from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend'
// import { DndProvider } from 'react-dnd'
// import itemTypes from '../../utils/itemTypes';
import  Serie from '../Serie'

// TODO   drag and drop NOK, need to train react dnd


function Series() {
  const allPositions = useSelector((state) => state.allPositions);
  // const ref = useRef(null);
  
  // const [,drop] = useDrop({
  //   accept : itemTypes.CARD,
  // })
  // const [{ isDragging }, drag] = useDrag({
  //   type: itemTypes.CARD,
  //   item:{
  //     type:itemTypes.CARD,
  //   },
  //   collect: (monitor) => ({
  //     isDragging : !!monitor.isDragging(),
  //   })
  // });
  
  // drag(drop(ref));
  return (
    <div >
          {/* <DndProvider backend={HTML5Backend}>
      <Card.Group itemsPerRow={10}>
        {allPositions.map((item)=> (
          <Card
          raised
          image={item.img_url}
          key = {item.id} 
          ref={drag} 
          style={{ opacity :isDragging? 0 : 1 }}        
          />
        ))}
      </Card.Group>
      </DndProvider> */}
        <div>
      {/* <DndProvider backend={HTML5Backend}> */}
        {allPositions.map((item)=> (

          <img 
            key = {item.id}
            // style={{ opacity :isDragging? 0 : 1 }}    
            // ref={drag} 
            src={item.img_url}
            alt='toto'       
          />

        ))}
      {/* </DndProvider> */}
        </div>
      <Serie/>
      <Serie/>
      <Serie/>
      <Serie/>
    </div>
  );
}

export default Series