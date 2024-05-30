
import './App.css';
import Login from './Component/Login';
import Signup from './Component/Signup';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
