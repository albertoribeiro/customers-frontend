import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { store } from '~/store';

import DefaultLayout from '~/pages/_layouts/Default';
import LoginLayout from '~/pages/_layouts/Login';

export default function RouteWrapper({ path, component, exact, restrict }) {
  const { signed } = store.getState().login;

  if (!signed && restrict) {
    return <Redirect to="/" />;
  }
  if (signed && !restrict) {
    return <Redirect to="/home" />;
  }

  const Layout = signed ? DefaultLayout : LoginLayout;

  return (
    <Layout>
      <Route
        path={path}
        component={component}
        exact={exact}
        restrict={restrict}
      />
    </Layout>
  );
}

RouteWrapper.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  exact: PropTypes.bool,
  restrict: PropTypes.bool,
};

RouteWrapper.defaultProps = { exact: false, restrict: false };
