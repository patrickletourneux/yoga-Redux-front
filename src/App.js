// == Import
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Listcard from './components/Listcard';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { selectFilteredPositions } from './selectors';

import './styles.css';

// == Composant
function App() {

  const favoritesPositions = useSelector((state) => state.favoritePositions);
  const detailPosition = useSelector((state) => state.detailPosition);

  const filteredPositions = useSelector(selectFilteredPositions());

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
              favoritesPage
            />
          )}
        />
        <Route
          exact
          path="/singleCard"
          element={(
            <div>
              <h3>details Page of the posture</h3> 
              <Listcard
                data={[detailPosition]}
                singleCardPage
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
