import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Header from './components/Header';
import Myprofile from './components/Myprofile';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import Dragons from './components/Dragons/Dragons';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/myProfile" element={<Myprofile />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
      </Routes>
    </Router>
  );
}

export default App;
