import React from 'react';
import { useDispatch } from 'react-redux';

import { IconButton } from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';

import { Container, Content } from './styles';
import logo from '~/assets/logo_header.png';

import { logoutRequest } from '~/store/modules/login/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(logoutRequest());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logo pagaleve" />
        </nav>

        <aside>
          <IconButton
            onClick={handleSignOut}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <ExitToApp />
          </IconButton>
        </aside>
      </Content>
    </Container>
  );
}
