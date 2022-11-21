import './App.css';
import PatientPage from './pages/adminmedicalrecords/PatientPage';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Navbar from './component/Navbar';
import Header from './component/Header';
import Footer from './component/Footer';
function App() {
  return (
    <Router>
      <Header/>
      <Navbar />
      <Routes>
      <Route path="/" element={<PatientPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
