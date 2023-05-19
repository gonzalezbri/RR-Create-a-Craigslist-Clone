// Import data

// Import components
import './App.css';
import Searchbar from './Components/Searchbar.jsx';
import SideBar from './Components/SideBar';
import Listings from './Components/Listings';



function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <SideBar />
        <div>
        <Searchbar />
        <Listings />
        </div>
      </div>
    </div>
  );
}

export default App;
