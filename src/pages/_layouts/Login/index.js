import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Content> {children} </Content>
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
