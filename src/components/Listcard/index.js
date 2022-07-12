import React from 'react';
import Form from '../Form';
// import Card from 'src/components/Card';
import { useEffect } from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { 
  addFavoritePosition,
  deleteFavoritePosition,
  changeDetailPosition,
} from '../../actions';


function Listcard({
  data,
  favoritesPage,
  homePage,
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
  const handleDetailCard = (event) => {
    const action = changeDetailPosition(event.target.id);
    dispatch(action);
  };

  useEffect(() => {
    console.log('LISTCARD NOUVEAU RENDU');
  });

  return (
    <div className="marginbot">
      {homePage && 
      (<Form>
      </Form>)
      }
      <Card.Group
        itemsPerRow={3}
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
              <Link
                to="/singleCard"
              >
                <Image
                  src={item.img_url}
                  onClick={handleDetailCard}
                  id={item.id}
                  size="small"
                  centered
                />
              </Link>
              <Card.Content>
                <Card.Header>{item.sanskrit_name}</Card.Header>
                <Card.Description>
                  {item.english_name}
                </Card.Description>
                {favoritesPage
                && (
                <Button
                  type="button"
                  color="black"
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
                  color="black"
                  size="mini"
                  fluid
                  onClick={handleAddFavoritesPositions}
                  id={item.id}
                >
                  add to favorites
                </Button>
                )}
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
    user_id: PropTypes.number.isRequired,
    img_url: PropTypes.string.isRequired,
    english_name: PropTypes.string.isRequired,
    sanskrit_name: PropTypes.string.isRequired,
  })),
  addToFavoritesPositions: PropTypes.func,
  deleteToFavoritesPositions: PropTypes.func,
  seeDetailCardOnClick: PropTypes.func,
  favoritesPage: PropTypes.bool,
  homePage: PropTypes.bool,
  detailPage: PropTypes.bool,
};

Listcard.defaultProps = {
  data: [],
  favoritesPage: false,
  homePage: false,
  detailPage: false,
  addToFavoritesPositions: function () {},
  deleteToFavoritesPositions: function () {},
  seeDetailCardOnClick: function () {},
};
export default Listcard;
