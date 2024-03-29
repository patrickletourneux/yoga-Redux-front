// == Import
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RequireAuth from './components/RequireAuth';
import Listcard from './components/Listcard';
import Footer from './components/Footer';
import Blog from './components/Blog';
import PositionDetail from './components/PositionDetail';
import UserNotification from './components/UserNotification';

import { selectFilteredPositionsBySearchText } from './selectors';
import useComponentRenderLog from './hookCustom/useComponentRenderLog';

import './styles.css';

// == Composant
function App() {
  const favoritesPositions = useSelector((state) => state.positions.favoritePositions);
  const filteredPositions = useSelector(selectFilteredPositionsBySearchText());

  useComponentRenderLog('APP');

  useEffect(() => {
  }, [favoritesPositions, filteredPositions]);

  return (
    <div className="app">
      <Header />
      <UserNotification />
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
          path="/blog"
          element={(
            <RequireAuth>
              <div>
                <Blog />
              </div>
            </RequireAuth>
          )}
        />
        <Route
          exact
          path="/position/:id"
          element={(
            <RequireAuth>
              <div>
                <PositionDetail />
              </div>
            </RequireAuth>
          )}
        />
        <Route
          exact
          path="*"
          element={(
            // <RequireAuth>
            <div>
              404
            </div>
            // </RequireAuth>
          )}
        />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
