import './App.css';
import Header from './global/Header';
import Footer from './global/Footer';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
