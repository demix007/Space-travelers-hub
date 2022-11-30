import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Header from './components/Header';
import Myprofile from './components/Myprofile';
import Rockets from './components/Rockets/Rockets';
import Mission from './components/Mission';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/myProfile" element={<Myprofile />} />
        <Route path="/missions" element={<Mission />} />
      </Routes>
    </Router>
  );
}

export default App;
