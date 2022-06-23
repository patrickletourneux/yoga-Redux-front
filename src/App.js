// == Import
import Header from './components/Header';
import Listcard from './components/Listcard';
import Footer from './components/Footer';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import data from './data/yoga_api';
// import reactLogo from './react-logo.svg';

import './styles.css';

// == Composant
function App() {
  const [favoritesPositions, setfavoritesPositions] = useState([]);
  const [detailCard, setdetailCard] = useState([]);

  const handleAddFavoritesPositions = (event) => {
    console.log('clic add');
    const position = data.find((item) => item.id.toString() === event.target.id);
    let positions = [...favoritesPositions];
    positions.push(position);
    // delete double
    positions = [...new Set(positions)];

    setfavoritesPositions(positions);
    console.log('favoritesPositions ', favoritesPositions);
  };

  const handleDeleteFavoritesPositions = (event) => {
    // delete the position selected
    console.log('clic delete');
    const positions = favoritesPositions.filter((item) => item.id.toString() !== event.target.id);
    setfavoritesPositions(positions);
    console.log('favoritesPositions ', favoritesPositions);
  };

  const handleDetailCard = (event) => {
    // changeDetailCard
    console.log('clic detail ', event.target.id);
    const position = data.find((item) => item.id.toString() === event.target.id);
    setdetailCard(position);
    console.log('detailCard ', detailCard);
  };

  // useEffect(() => {
  //   console.log('APP NOUVEAU RENDU');
  //   console.log('useEffect favoritesPositions ', favoritesPositions);
  //   console.log('detailCard ', detailCard);
  //   console.log('APP END NOUVEAU RENDU');
  // }, []);

  return (
    <div className="app">
      {/* <img src={reactLogo} alt="react logo" /> */}
      {/* <h1>Composant : App</h1> */}
      <Header />
      <Routes>
        <Route
          exact
          path=""
          element={(
            <Listcard
              data={data}
              addToFavoritesPositions={handleAddFavoritesPositions}
              seeDetailCardOnClick={handleDetailCard}
              homePage
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
                data={[detailCard]}
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
