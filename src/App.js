import './App.css';
import Header from './global/Header';
import Footer from './global/Footer';
import { Outlet } from 'react-router-dom'
import Sidebar from './global/sidebar/Sidebar';
import {useState} from 'react';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const triggerSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="App">
      <Header triggerSidebar={triggerSidebar}></Header>
      <Sidebar show={showSidebar} triggerSidebar={triggerSidebar}/>
      <Outlet context={[showSidebar, setShowSidebar]}></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
