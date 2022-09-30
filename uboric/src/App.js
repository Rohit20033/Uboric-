import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import AllRoutes from './Pages/AllRoutes';
import Footer from './Component/fotter';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
