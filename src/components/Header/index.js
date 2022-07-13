import React from 'react';
import { Header as Head } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Navmenu from '../Navmenu';

function Header(props) {
  return (
    <div className="marginbot">
      <Head as="h3" textAlign="center">
        <Head.Content>
          Yoga / React.js / semantic UI React / Redux
          <Navmenu />
        </Head.Content>
      </Head>
    </div>
  );
}

Header.propTypes = {};

export default Header;
