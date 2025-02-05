// import arrowsubmit from './arrowlogo.svg'
import person from './person.svg'
import './App.css';

function App() {
  return (
    <span>
      <div className='welcomeSection'>
        <div>
          <NavBar />
          <MainSearch />
          <SavedAddress />
        </div>
      </div>
      <div className='section2'>
        <Sec2Top />
        <Sec2Bottom />
      </div>
        <Section3 />
        <Section4 />
    </span>
  );
}

function SearchBar() {
  return (
      <div className="searchBar">
        <input placeholder = "Enter Delivery Address" className='search'/>
        <input type='submit' className="submitBtn"/>
      </div>
  );
}

function NavBar() {
  return (
    <div className="navBar">
        
        {/* <img src={DDlogo} className="logo" alt="logo" /> */}
        <div className='buttons'>
          <button className='button signIn'>Sign In</button>
          <button className='button whiteBtn '>Sign Up</button>
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

function SavedAddress() {
  return (
    <div className='savedAddress'>
      <button type='submit' className='button whiteBtn'>
          <img src={person} alt="logo" />
          Sign in for saved address
      </button>
    </div>
  )
}

function Sec2Bottom() {
  return (
    <div className='section2BottomPart'>
        <div className='section2BottomText'>
          <h2 className='titleText'>Everything you crave, delivered.</h2>
          <h3>Your favorite local restaurants</h3>
          <p>Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.</p>
          <br></br>
          <button href="www.doordash.com" className='button redBtn'>Find restaurants</button>
        </div>
        <div >
          <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/download_the_app_desktop.png" alt='personEating' />
        </div>
      </div>
  )
}

function Section3() {
  return (
    <div className='section3'>
      <img src='https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/dashpass_desktop.png' alt='Chipotle' />
      <div className='section3Text'>
        <h2 className='titleText'>DashPass is delivery for less</h2>
        <p>Members get a $0 delivery fee on DashPass orders, 5% back on pickup orders, and so much more. Plus, it's free for 30 days.</p>
        <button className='button redBtn'>Get Dashpass</button>
      </div>
    </div>
  )
}

function Sec2Top () {
  return (
    <div className='section2TopPart'>
        <div className='section2Layout'>
          <img src='https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg' alt='scootPic'/>
          <h2 className='titleText'>Become a Dasher</h2>
          <p>As a delivery driver, make money and work on your schedule. Sign up in minutes.</p>
          <a href="www.doordash.com" >Start earning</a>
        </div>
        <div className='section2Layout'>
          <img src="https://cdn.doordash.com/media/consumer/home/landing/new/Storefront.svg" alt='storeFront'/>
          <h2 className='titleText'>Become a Merchant</h2>
          <p>Attract new customers and grow sales, starting with 0% commissions for up to 30 days.</p>
          <a href="www.doordash.com" >Sign up for doordash</a>
        </div>
        <div className='section2Layout'>
          <img src='https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg' alt='iphone' className='phoneImage'/>
          <h2 className='titleText'>Get the best DoorDash experience</h2>
          <p>Experience the best your neighborhood has to offer, all in one app.</p>
          <a href="www.doordash.com">Get the app</a>
        </div>
      </div>
  )
}

function Section4() {
  return (
    <div className='section4'>
      <div className='section4Text'>
        <h2> 
          Get grocery and convenience store essentials 
        </h2>
        <h3>Grocery delivery, exactly how you want it.</h3>
        <p>Shop from home and fill your cart with fresh produce, frozen entrees, deli delights and more.</p>
        <button className='button redBtn'>
          Shop Groceries
        </button>
      </div>
    </div>
  )
}

export default App;
