// == Import
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Listcard from './components/Listcard';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


import './styles.css';

// == Composant
function App() {

  const filteredPositions = useSelector((state) => state.filteredPositions);
  const favoritesPositions = useSelector((state) => state.favoritePositions);
  const detailPosition = useSelector((state) => state.detailPosition);

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
              details Page of the posture
              <Listcard
                data={[detailPosition]}
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
