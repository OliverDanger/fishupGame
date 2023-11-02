import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './components/context/UserContext';

//components
import TitleView from './components/pages/TitleView';
import MapView from './components/pages/MapView';
import CabinView from './components/pages/CabinView';
import ClosetView from './components/pages/ClosetView';
import BelowDeckView from './components/pages/BelowDeckView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TitleView />} />
        <Route path='/map' element={<MapView />} />
        <Route path='/cabin' element={<CabinView />} />
        <Route path='/cabin/closet' element={<UserProvider><ClosetView /></UserProvider>} />
        <Route path='/below' element={<BelowDeckView />} />
      </Routes>
    </Router>
  );
};

export default App;
