import React from 'react';
import { Switch } from 'react-router-dom';
import RouteWrapper from './Route';
import Login from '~/pages/Login';
import Home from '~/pages/Home';
import Customer from '~/pages/Customer';

export default function Routes() {
  return (
    <Switch>
      <RouteWrapper path="/" component={Login} exact />
      <RouteWrapper path="/home" component={Home} restrict />
      <RouteWrapper path="/customer" component={Customer} restrict />
    </Switch>
  );
}
