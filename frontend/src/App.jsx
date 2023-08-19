import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


//components
import MapView from './components/MapView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/map" element={<MapView />} />
      </Routes>
    </Router>
  );
};

export default App;
