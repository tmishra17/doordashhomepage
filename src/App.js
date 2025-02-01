import DDlogo from './DDlogo.svg';
import './App.css';

function App() {
  return (
      <div>
        <div className="navBar">
          <img src={DDlogo} className="logo" alt="logo" />
          <div className='buttons'>
            <button>Log in</button>
            <button>sign up</button>
          </div>
        </div>
        
       <MainSearch />
        
      </div>
  );
}

function SearchBar() {
  return (
      <div className="searchBar">
        <input placeholder = "Enter Delivery Address" className='search'/>
        <input type='submit' className="submit-btn"/>
      </div>
  );
}

function MainSearch() {
  return (
    <div className='textAndSearchBar'>
    <h1>Discover restaurants and more near you</h1>
    <form autocomplete="off">
      <SearchBar />
    </form>
  </div>
  )
}

export default App;
