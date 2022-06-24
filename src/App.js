import {Routes, Route} from 'react-router-dom'
import Header from './Shared/Header';
import HomePage from './Pages/Home/HomePage';
import Footer from './Shared/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
