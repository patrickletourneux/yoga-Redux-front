import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeSearchText,
  initialiseFilteredPositions,
} from '../../actions/positions';

import './styles.css';

export default function SearchFormular() {
  const dispatch = useDispatch();

  const searchText = useSelector((state) => state.positions.searchText);
  // const filteredPositions = useSelector((state) => state.filteredPositions);
  const handleDeleteFilter = () => {
    const action1 = changeSearchText('');
    dispatch(action1);
    const action2 = initialiseFilteredPositions();
    dispatch(action2);
  };
  const handlesearchTextChange = (event) => {
    event.preventDefault();
    const action = changeSearchText(event.target.value);
    dispatch(action);
  };
  // const handlesubmitSearchText = (event) => {
  //   console.log('handlesubmitSearchText');
  //   const action = changeFilteredPositions(searchText);
  //   dispatch(action);
  // };
  return (
    <div>

      <h4>Search Sanskrit/English</h4>
      <Form
        className="form marginBottom"
        size="mini"
      >
        <Form.Field>

          <Input
            className="form__input"
            type="text"
            action="filter"
            value={searchText}
            size="mini"
            onChange={handlesearchTextChange}
          />
        </Form.Field>
        <Button
          type="button"
          color={searchText.length > 0 ? 'red' : 'grey'}
          onClick={handleDeleteFilter}
          size="mini"
        >
          Delete filter
        </Button>
      </Form>
    </div>
  );
}
