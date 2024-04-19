import SignUp from './Pages/SignUp';
import Signin from './Pages/Signin';
import Dashboard from './Pages/Dashboard';
import GetTeraphy from './Pages/GetTeraphy'
import {  Route, Routes } from 'react-router-dom';

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Signin />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schedule" element={<GetTeraphy />} />
        <Route path="/community" element={<>Hi Community Page Here</>} />
        <Route path="/contact" element={<>Hi Contact Page Here</>} />
        <Route path="/resources" element={<>Hi Resources Page Here</>} />
        <Route path="/blog" element={<>Hi Blog Page Here</>} />
                
      </Routes>
  );
};

export default App;
