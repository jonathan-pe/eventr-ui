import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Events from '../../modules/events/events'
import Calendar from '../../modules/calendar/calendar'
import Login from '../../modules/login/login'

const EventrRouter = (): JSX.Element => {
  const isAuthenticated = false
  return (
    <Switch>
      <PrivateRoute path='/events' component={Events} />
      <PrivateRoute path='/calendar' component={Calendar} />
      <Route path='/login' component={Login} />

      <Route
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
