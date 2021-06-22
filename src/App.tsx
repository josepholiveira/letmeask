import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'

import { BrowserRouter, Switch, Route } from 'react-router-dom' 

import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from './pages/Room';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={NewRoom} exact path="/rooms/new" />
          <Route component={Room} path="/rooms/:id" />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
