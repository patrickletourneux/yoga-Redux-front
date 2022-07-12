// == Import
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { 
  changeSearchText , 
  changeFilteredPositions , 
  initialiseFilteredPositions , 
  addFavoritePosition,
  deleteFavoritePosition,
  changeDetailPosition,
} from './actions';

import Header from './components/Header';
import Listcard from './components/Listcard';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


import './styles.css';

// == Composant
function App() {
  const dispatch = useDispatch();

  const searchText = useSelector((state) => state.searchText);
  const filteredPositions = useSelector((state) => state.filteredPositions);
  const favoritesPositions = useSelector((state) => state.favoritePositions);
  const detailPosition = useSelector((state) => state.detailPosition);

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
  const handleAddFavoritesPositions = (event) => {
    const action = addFavoritePosition(event.target.id);
    dispatch(action);
  };
  const handleDeleteFavoritesPositions = (event) => {
    const action = deleteFavoritePosition(event.target.id);
    dispatch(action);
  };
  const handleDetailCard = (event) => {
    const action = changeDetailPosition(event.target.id);
    dispatch(action);
  };

  useEffect(() => {
    console.log('APP NOUVEAU RENDU');
  });

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          exact
          path=""
          element={(
            <Listcard
              data={filteredPositions}
              addToFavoritesPositions={handleAddFavoritesPositions}
              seeDetailCardOnClick={handleDetailCard}
              homePage
              onSubmitSearchText={handlesubmitSearchText}
              onSearchTextChange={handlesearchTextChange}
              searchText={searchText}
              filteredPositions={filteredPositions}
              handleDeleteFilter = {handleDeleteFilter}
            />
          )}
        />
        <Route
          exact
          path="/favorites"
          element={(
            <Listcard
              data={favoritesPositions}
              deleteToFavoritesPositions={handleDeleteFavoritesPositions}
              seeDetailCardOnClick={handleDetailCard}
              favoritesPage
            />
          )}
        />
        <Route
          exact
          path="/singleCard"
          element={(
            <div>
              details Page of the posture
              <Listcard
                data={[detailPosition]}
                seeDetailCardOnClick={handleDetailCard}
                detailPage
              />
            </div>
          )}
        />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
