import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginPage'
import NotFound from './components/NotFoundPage'
import Home from './components/HomePage'

// write your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/bad-path" component={NotFound} />
    <Redirect to="/bad-path" />
  </Switch>
)

export default App
