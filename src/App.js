import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import ProtectedRoute from './components/ProtectedRoute'
import LoginForm from './components/LoginPage'
import NotFound from './components/NotFoundPage'
import Home from './components/HomePage'
import CategoryPlaylist from './components/CategoryPlaylistDetails'
import PlaylistDetails from './components/PlaylistDetails'
import Album from './components/AlbumDetails'

// write your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/bad-path" component={NotFound} />
    <ProtectedRoute
      exact
      path="/category/:id/playlists"
      component={CategoryPlaylist}
    />
    <ProtectedRoute exact path="/playlist/:id" component={PlaylistDetails} />
    <ProtectedRoute exact path="/album/:id" component={Album} />
    <Redirect to="/bad-path" />
  </Switch>
)

export default App
