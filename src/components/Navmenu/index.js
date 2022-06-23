import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function Navmenu(props) {
  // state = {}

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  // render() {
  //   const { activeItem } = this.state

  return (
    <Menu compact stackable>
      <Menu.Item
        name="home"
        to="/"
        as={NavLink}
        // active={activeItem === 'home'}
        // onClick={this.handleItemClick}
      >
        home
      </Menu.Item>

      <Menu.Item
        name="favorites"
        to="/favorites"
        as={NavLink}
        // active={activeItem === 'favorites'}
        // onClick={this.handleItemClick}
      >
        favorites
      </Menu.Item>
    </Menu>
  );
}

Navmenu.propTypes = {};

export default Navmenu;
