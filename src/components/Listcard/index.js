// import React from 'react';
// import Card from 'src/components/Card';

import { Card, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import SearchFormular from '../SearchFormular';
import {
  addFavoritePosition,
  deleteFavoritePosition,
} from '../../actions/positions';
import useComponentRenderLog from '../../hookCustom/useComponentRenderLog';

function Listcard({
  data,
  favoritesPage,
  homePage,
  singleCardPage,
}) {
  const dispatch = useDispatch();

  const handleAddFavoritesPositions = (event) => {
    const action = addFavoritePosition(event.target.id);
    dispatch(action);
  };
  const handleDeleteFavoritesPositions = (event) => {
    const action = deleteFavoritePosition(event.target.id);
    dispatch(action);
  };

  useComponentRenderLog('Listcard');

  return (
    <div className="marginbot">
      {homePage
      && (
      <SearchFormular />
      )}
      <Card.Group
        itemsPerRow={singleCardPage ? 1 : 3}
        stackable
        centered
        textAlign="center"
      >
        {
          data.map((item) => (
            <Card
              key={item.id}
              centered
            >
              {favoritesPage
              && (
                <Button
                  type="button"
                  // color="black"
                  size="mini"
                  fluid
                  onClick={handleDeleteFavoritesPositions}
                  id={item.id}
                >
                  remove favorites
                </Button>
              )}
              {homePage
              && (
                <Button
                  type="button"
                  // color="black"
                  size="mini"
                  fluid
                  onClick={handleAddFavoritesPositions}
                  id={item.id}
                >
                  add to favorites
                </Button>
              )}
              <Link
                to={`/position/${item.id}`}
              >
                <Image
                  src={item.img_url}
                  id={item.id}
                  size="small"
                  centered
                  loading="lazy"
                />
              </Link>

              <Card.Content>
                {/* <Card.Header></Card.Header> */}
                <Card.Description>
                  {item.sanskrit_name}
                  <br />
                  <br />
                  {item.english_name}
                </Card.Description>
              </Card.Content>
            </Card>
          ))
        }
      </Card.Group>
    </div>
  );
}

Listcard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    user_id: PropTypes.number,
    img_url: PropTypes.string,
    english_name: PropTypes.string,
    sanskrit_name: PropTypes.string,
  })),
  favoritesPage: PropTypes.bool,
  homePage: PropTypes.bool,
  singleCardPage: PropTypes.bool,
};

Listcard.defaultProps = {
  data: [],
  favoritesPage: false,
  homePage: false,
  singleCardPage: false,
};
export default Listcard;
