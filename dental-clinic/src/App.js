import './App.css';
import HomepageIndex from './pages/homepage/homepageIndex';
import FormContainer from './pages/user/login/index.jsx';
import {
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
      <FormContainer />
      {/* <HomepageIndex /> */}
      <Routes>
        
      </Routes>
    </>
  );
}

export default App;