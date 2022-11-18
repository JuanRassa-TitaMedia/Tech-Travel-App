import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Container, HeaderContainer, Cart } from './styles';

function Header() {
  return (
    <Container>
      <HeaderContainer>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/cart">
          <Cart>
            <div>
              <span>0</span>
            </div>
            <FaShoppingCart size={36} color="#FFF" />
          </Cart>
        </Link>
      </HeaderContainer>
    </Container>
  );
}

export default Header;
