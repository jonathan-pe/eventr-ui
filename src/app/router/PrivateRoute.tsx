import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({
  path,
  children,
  isAuthenticated,
  ...rest
}: {
  path: string
  children: JSX.Element | Array<JSX.Element>
  isAuthenticated: boolean
}): JSX.Element => {
  return (
    <Route
      {...rest}
      path={path}
      render={props =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              search: '?error=UnauthorizedError',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
