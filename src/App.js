import {Routes, Route} from 'react-router-dom'
import Header from './Shared/Header';
import HomePage from './Pages/Home/HomePage';
import Footer from './Shared/Footer';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
