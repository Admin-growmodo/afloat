import './App.css';
import Header from './global/Header';
import Footer from './global/Footer';
import Homepage from './pages/homepage/Homepage';
import Collection from './pages/collection/Collection';

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>           
    <div className="App">
      <Header></Header>
           <Routes>
                 <Route exact path='/' element={< Homepage />}></Route>
                 <Route exact path='/collection' element={< Collection />}></Route>
          </Routes>
          
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
