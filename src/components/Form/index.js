
import React from 'react'
import { Button, Form } from 'semantic-ui-react'

import './styles.css';

export default function Formular({
  onSubmitSearchText,
  onSearchTextChange,
  searchText,
  filteredPositions,
  handleDeleteFilter
}) {
  return (
    <Form 
    className="form marginBottom" onSubmit={onSubmitSearchText}
    >
      <Form.Field>
      <label>Search Sanskrit/English</label>
      <input 
        className="form__input"
        type="text"
        value={searchText}
        onChange={onSearchTextChange} />
      </Form.Field>
      <Button 
       type="button"
       color = {filteredPositions.length < 48 ? "red":"grey"}
       onClick={handleDeleteFilter}
      >
        Delete filter
      </Button>
      <Button 
       type='submit'
       color='black'
      >
        Submit
      </Button>
    </Form>
  );
}
