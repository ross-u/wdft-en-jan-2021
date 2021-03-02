import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../../context/auth-context';



function AnonRoute(routeProps) {
  // coming from   <AnonRoute exact path="..." component={...} />
  const PageComponent = routeProps.component;
  const { exact, path } = routeProps;

  // coming from AuthProvider via withAuth
  const { isLoggedIn, isLoading } = routeProps;

  if (isLoading) return <p>Loading ...</p>

  return (
    <Route
      path={path}
      exact={exact} 
      render={function (props) {
        if (!isLoggedIn) return <PageComponent {...props} />
        else if (isLoggedIn) return <Redirect to="/private" />
      }}
    />
  )
}

export default withAuth(AnonRoute);
