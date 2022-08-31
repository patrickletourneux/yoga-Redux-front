// == Import
import { useSelector } from 'react-redux';

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RequireAuth from './components/RequireAuth';
import Listcard from './components/Listcard';
import Footer from './components/Footer';

import { selectFilteredPositions } from './selectors';

import './styles.css';

// == Composant
function App() {
  const favoritesPositions = useSelector((state) => state.positions.favoritePositions);
  const detailPosition = useSelector((state) => state.positions.detailPosition);

  const filteredPositions = useSelector(selectFilteredPositions());

  useEffect(() => {
    // console.log('APP NOUVEAU RENDU');
  });

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          exact
          path=""
          element={(
            <RequireAuth>
              <Listcard
                data={filteredPositions}
                homePage
              />
            </RequireAuth>
          )}
        />
        <Route
          exact
          path="/favorites"
          element={(
            <RequireAuth>
              <Listcard
                data={favoritesPositions}
                favoritesPage
              />
            </RequireAuth>
          )}
        />
        <Route
          exact
          path="/singleCard"
          element={(
            <RequireAuth>
              <div>
                <h3>details Page of the posture</h3>
                <Listcard
                  data={[detailPosition]}
                  singleCardPage
                />
              </div>
            </RequireAuth>
          )}
        />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
