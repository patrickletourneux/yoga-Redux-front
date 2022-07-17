import React from 'react';
import { Header as Head } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Navmenu from '../Navmenu';
import ModalSignup from '../ModalSignup';
import ModalSignin from '../ModalSignin';

function Header(props) {
  return (
    <div className="marginbot">
      <Head as="h1" textAlign="center">
        <Head.Content>
          <ModalSignup />
          <ModalSignin />
          <h2>Yoga / React.js / semantic UI React / Redux</h2>
          <Navmenu />
        </Head.Content>
      </Head>
    </div>
  );
}

Header.propTypes = {};

export default Header;
