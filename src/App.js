import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import  Home  from './components/Home';
import Signin from './components/Signin';


const App = () => (
  <BrowserRouter>
    <div>
      <Navbar type={'home'} />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>


  </BrowserRouter>
);


export default App;
