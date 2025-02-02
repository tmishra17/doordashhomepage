// import arrowsubmit from './arrowlogo.svg'
import './App.css';

function App() {
  return (
      <div>
        <NavBar />
        <MainSearch />

      </div>
  );
}

function SearchBar() {
  return (
      <div className="searchBar">
        <input placeholder = "Enter Delivery Address" className='search'/>
        <input type='submit' className="submiBtn"/>
      </div>
  );
}

function NavBar() {
  return (
    <div className="navBar">
        
        {/* <img src={DDlogo} className="logo" alt="logo" /> */}
        <div className='buttons'>
          <button className='signIn'>Sign In</button>
          <button className='signUp'>Sign Up</button>
        </div>
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
