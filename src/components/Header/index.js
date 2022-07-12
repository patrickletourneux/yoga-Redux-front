import React from 'react';
import { Header as Head } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Navmenu from '../Navmenu';

function Header(props) {
  return (
    <div className="marginbot">
      <Head as="h1" textAlign="center">
        <Head.Content>
          <h1>Yoga / React.js / semantic UI React / Redux</h1>
          <Navmenu />
        </Head.Content>
      </Head>
    </div>
  );
}

Header.propTypes = {};

export default Header;
