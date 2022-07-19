import React from 'react';
import { Header as Head } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import Navmenu from '../Navmenu';
import ModalSignup from '../ModalSignup';
import ModalSignin from '../ModalSignin';
import DisconnectButton from '../DisconnectButton';


function Header(props) {
  const isUserConnected = useSelector((state) => state.isUserConnected);
  return (
    <div className="marginbot">
      <Head as="h1" textAlign="center">
        <Head.Content>
          {!isUserConnected ?
          <div>
            <ModalSignup />
            <ModalSignin /> 
          </div>
          : 
          <DisconnectButton/>
        }
          <h2>Yoga / React.js / semantic UI React / Redux</h2>
          <Navmenu />
        </Head.Content>
      </Head>
    </div>
  );
}

Header.propTypes = {};

export default Header;
