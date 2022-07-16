import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

function Navmenu(props) {
  return (
    <Menu 
      compact 
    >
      <Menu.Item
        name="signup"
        to="/signup"
        as={NavLink}
        // active={activeItem === 'home'}
        // onClick={this.handleItemClick}
      >
        signup
      </Menu.Item>
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
      >
        favorites
      </Menu.Item>
      <Menu.Item
        name="detail"
        to="/singleCard"
        as={NavLink}
      >
        detail
      </Menu.Item>
    </Menu>
  );
}

export default Navmenu;
