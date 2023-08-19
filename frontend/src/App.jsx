import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


//components
import TitleView from './components/pages/TitleView';
import MapView from './components/pages/MapView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TitleView />} />
        <Route path="/map" element={<MapView />} />
      </Routes>
    </Router>
  );
};

export default App;
