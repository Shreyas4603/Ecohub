import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import  Home  from './components/Home';


const App = () => (
  <BrowserRouter>
    <div>
      <Navbar type={'home'} />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>


  </BrowserRouter>
);


export default App;
