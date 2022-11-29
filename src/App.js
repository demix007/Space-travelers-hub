import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Header from './components/Header';
import Myprofile from './components/Myprofile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/myProfile" element={<Myprofile />} />
      </Routes>
    </Router>
  );
}

export default App;
