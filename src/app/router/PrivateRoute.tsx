import { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ path, component, ...rest }: { path: string; component: () => JSX.Element }): JSX.Element => {
  const isAuthenticated = false
  return (
    <Route
      {...rest}
      path={path}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
