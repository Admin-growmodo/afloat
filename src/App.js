import './App.css';
import Header from './global/Header'
import Footer from './global/Footer'
import Homepage from './pages/homepage/Homepage';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;
