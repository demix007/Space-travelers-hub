import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route, 

} from 'react-router-dom';
import Header from './components/Header';
import Myprofile from './components/myProfile';

function App() {
  return (
    <Router>
      <Header />
      <Routes path="/myProfile" element={<Myprofile />}>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
