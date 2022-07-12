
import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { 
  changeSearchText , 
  changeFilteredPositions , 
  initialiseFilteredPositions , 
} from '../../actions';

import './styles.css';

export default function Formular() {
  const dispatch = useDispatch();

  const searchText = useSelector((state) => state.searchText);
  const filteredPositions = useSelector((state) => state.filteredPositions);
  const handleDeleteFilter = () => {
    console.log('handleDeleteFilter');
    const action1 = changeSearchText('');
    dispatch(action1);
    const action2 = initialiseFilteredPositions();
    dispatch(action2);
  }
  const handlesearchTextChange = (event) => {
    console.log('handlesearchTextChange');
    event.preventDefault();
    const action = changeSearchText(event.target.value);
    dispatch(action);
  };
  const handlesubmitSearchText = (event) => {
    console.log('handlesubmitSearchText');  
    const action = changeFilteredPositions(searchText);
    dispatch(action);
  };
  return (
    <Form 
    className="form marginBottom" onSubmit={handlesubmitSearchText}
    >
      <Form.Field>
      <label>Search Sanskrit/English</label>
      <input 
        className="form__input"
        type="text"
        value={searchText}
        onChange={handlesearchTextChange} />
      </Form.Field>
      <Button 
       type='submit'
       size="mini"
      //  color='black'
      >
        Submit filter
      </Button>
      <Button 
       type="button"
       color = {filteredPositions.length < 48 ? "red":""}
       onClick={handleDeleteFilter}
       size="mini"
      >
        Delete filter
      </Button>
    </Form>
  );
}
