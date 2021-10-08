import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Events from '../../modules/events/events'
import Calendar from '../../modules/calendar/calendar'
import Login from '../../modules/login/login'

const EventrRouter = ({ isAuthenticated }: { isAuthenticated: boolean }): JSX.Element => {
  return (
    <Switch>
      <Route path='/login' component={Login} />

      <PrivateRoute path='/events' isAuthenticated={isAuthenticated}>
        <Events />
      </PrivateRoute>
      <PrivateRoute path='/calendar' isAuthenticated={isAuthenticated}>
        <Calendar />
      </PrivateRoute>

      <Route
        exact
        path='/'
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: '/events',
                state: { from: props.location },
              }}
            />
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
    </Switch>
  )
}

export default EventrRouter
