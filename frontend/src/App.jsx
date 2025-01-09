import { BrowserRouter as Router, 
  Routes, Route } from "react-router-dom";
import Home from '../src/components/Home';
import ChooseUser from '../src/components/ChooseUser';

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Choose-user' element={<ChooseUser/>} />

       
      </Routes>
    </Router>
  )
}

export default App
