import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

function Navmenu() {
  return (
    <Menu
      compact
    >
      <Menu.Item
        name="home"
        to="/"
        as={NavLink}
      >
        <Icon name="home" />
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
      <Menu.Item
        name="blog"
        to="/blog"
        as={NavLink}
      >
        blog
      </Menu.Item>
    </Menu>
  );
}

export default Navmenu;
