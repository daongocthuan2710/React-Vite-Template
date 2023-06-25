import * as React from 'react';
import { redirect, Route, RouteProps } from 'react-router-dom';
import { STORAGE } from '../../../../constants/storage';

export type PrivateRouteProps = RouteProps;

export default function PrivateRoute(props: PrivateRouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem(STORAGE.ACCESS_TOKEN));

  if (!isLoggedIn) return redirect('/login');

  return <Route {...props} />;
}
