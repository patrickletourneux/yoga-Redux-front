import { useState, useRef, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { sendMessage, changeInputValue } from 'src/actions';
// import './style.scss';
import React from 'react'
import { Button, Form } from 'semantic-ui-react'


export default function Formular({
  onSubmitSearchText,
  onSearchTextChange,
  searchText
}) {
  return (
    <Form 
    className="form" onSubmit={onSubmitSearchText}
    >
      <Form.Field>
      <label>Search Sanskrit</label>
      <input 
        className="form__input"
        type="text"
        placeholder={searchText}
        onChange={onSearchTextChange} />
      </Form.Field>
      <Button 
       type='submit'>Submit</Button>
    </Form>
  );
}
