/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Redirect, Route, RouteProps } from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  component: () => JSX.Element;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  const isSignedIn = false;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isSignedIn ? <Component {...routeProps} /> : <Redirect to='/login' />
      }
    />
  );
};

export default PrivateRoute;
