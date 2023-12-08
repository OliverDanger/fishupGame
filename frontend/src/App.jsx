import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './hooks/context/UserContext';
import DraggableApp from './DraggableApp';

//components
import TitleView from './components/pages/TitleView';
import LoginView from './components/pages/LoginView';
import SignUpView from './components/pages/SignUpView';
import MapView from './components/pages/MapView';
import CabinView from './components/pages/CabinView';
import ClosetView from './components/pages/ClosetView';
import BelowDeckView from './components/pages/BelowDeckView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }
  render() {
    return (
      <div>
        <UserProvider>
          <Router>
            <DraggableApp>
              <Routes>
                <Route path='/' element={<TitleView />} />
                <Route path='/login' element={<LoginView />} />
                <Route path='/signup' element={<SignUpView />} />
                <Route path='/map' element={<MapView />} />
                <Route path='/cabin' element={<CabinView />} />
                <Route path='/cabin/closet' element={<ClosetView />} />
                <Route path='/below' element={<BelowDeckView />} />
              </Routes>
            </DraggableApp>
          </Router>
        </UserProvider>
      </div>
    );
  }
}

export default App;
