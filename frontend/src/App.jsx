import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/components/Home';

function App() {
 

  return (
    <router>
      <Routes>
        <Route path='/' element={<Home/>} />

       
      </Routes>
    </router>
  )
}

export default App
