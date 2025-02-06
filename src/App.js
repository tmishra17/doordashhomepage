// import arrowsubmit from './arrowlogo.svg'
import person from './person.svg'
import './App.css';

function App() {
  return (
    <span>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />        
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

function Section1() {
  return (
    <div className='welcomeSection'>
    
        <NavBar />
      <div>
        <MainSearch />
        
      </div>
      
    </div>
  )
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
      <SavedAddress />
    </div>
  )
}

function SavedAddress() {
  return (
    <div className='savedAddress'>
      <button type='submit' className='button whiteBtn savedAddressBtn'>
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
    <div className='section2TopPart' >
        <Sec2Card 
          headingText="Become a Dasher" 
          bodyText="As a delivery driver, make money and work on your schedule. Sign up in minutes."
          linkText="Start earning"
          imgAlt="scootPic"
          imgSrc="https://cdn.doordash.com/media/consumer/home/landing/new/ScootScoot.svg"
          />
        <Sec2Card 
          headingText="Become a Merchant" 
          bodyText="Attract new customers and grow sales, starting with 0% commissions for up to 30 days."
          linkText="Sign up for doordash"
          imgAlt= "storeFront"
          imgSrc="https://cdn.doordash.com/media/consumer/home/landing/new/Storefront.svg"
          />
        <Sec2Card 
          headingText="Get the best DoorDash experience" 
          bodyText="Experience the best your neighborhood has to offer, all in one app."
          linkText="Get the app"
          imgAlt="iphone"
          imgSrc="https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg"
          />
        
        {/* <div className='section2Layout'>
          <img src='https://cdn.doordash.com/media/consumer/home/landing/new/iphone.svg' 
          alt='iphone' className='phoneImage'
          />
          <h2 className='titleText'>Get the best DoorDash experience</h2>
          <p>Experience the best your neighborhood has to offer, all in one app.</p>
          <a href="www.doordash.com">Get the app</a>
        </div> */}
      </div>
  )
}
function Sec2Card({headingText, bodyText, linkText, imgAlt, imgSrc}) {
  return (
    <div className='section2Layout'>
      {imgAlt === "iphone"? (
        <img src={imgSrc} alt={imgAlt} className='phoneImage'/>
      ):(
        <img src={imgSrc} alt={imgAlt} />
      )}
      <h2 className='titleText'>{headingText}</h2>
      <p>{bodyText}</p>
      <a href="www.doordash.com" >{linkText}</a>
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

function Section2() {
  return (
    <div className='section2'>
      <Sec2Top />
      <Sec2Bottom />
    </div>
  )
}

function Section5() {
  return (
    <div>
      <h1>Convenience stores at your doorstep</h1>
      <p>Stock up on snacks, household essentials, candy, or vitamins — all delivered in under an hour.</p>
      <Button buttonText="Shop Now"/>
      <img src='https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/convenience_desktop.png' alt='convenience desktop'/>
    </div>
  )
}

function Section6() {
  return (
    <div>
        <h1>Helping you with to-dos and gifting</h1>
      <div>
        <Section6Card 
            headingText='Return packages from home' 
            bodyText='Request a package pickup with just a few taps and get your returns dropped off at carriers like UPS, FedEx, and USPS.' 
            buttonText='Try Package Pickup' 
            imgAlt='Package Pickup Desktop' 
            imgSrc="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/package_pickup_desktop.png" 
          />
        <Section6Card 
            headingText='Flowers for any occasion' 
            bodyText='Shop hand-picked and thoughtfully-arranged blooms from florists near you.' 
            buttonText='Send Flowers' 
            imgAlt='Flowers' 
            imgSrc="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/flowers_desktop.png" 
          />
        <Section6Card 
            headingText='Restock the minibar' 
            bodyText='Hosting a get-together or need or need a special cocktail ingredient? Get liquor, beer, mixers, champagne and wine delivered fast.' 
            buttonText='Shop Alchohol' 
            imgAlt='Alcohol' 
            imgSrc="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/alcohol_desktop.png" 
          />
        <Section6Card 
            headingText='What your pets need, and want' 
            bodyText='Finally, something cat people and dog people agree on — pet supplies delivery. Shop pet food, chew toys, and even costumes.' 
            buttonText='Get Pet Supplies' 
            imgAlt='Dog Eating' 
            imgSrc="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/pet_supplies_desktop.png" 
          /> 
        </div>
    </div>
  )
}

function Section7() {
  return (
    <div>
      <h2>Unlocking opportunity for Dashers and businesses</h2>
      <div>
        <h2>Sign up to dash and get paid</h2>
        <p>Deliver with the #1 Food and Drink App in the U.S. As a delivery driver, you'll make money and work on your schedule. Sign up in minutes.</p>
        <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/become_a_dasher_desktop.png" alt='Man with Purse' />
      </div>
    </div>
  )
}

function Section8() {
  return (
    <div>
      <img src='https://img.cdn4dd.com/cdn-cgi/image/fit=cover,format=auto,quality=60/https://cdn.doordash.com/managed/consumer/seo/home/landing_cta/work_with_doordash_desktop.png' alt='Big Smile' />
      <h2>Grow your business with DoorDash</h2>
      <p>Businesses large and small partner with DoorDash to reach new customers, increase order volume, and drive more sales.</p>
      <Button buttonText="Become a Partner" />
    </div>
  )
}

function Section9() {
  return (<div><h2>Get more from your neighborhood</h2></div>)
}


function Section6Card({headingText, bodyText, buttonText, imgAlt ,imgSrc }) {
  return (
    <div>
      <img src={imgSrc} alt={imgAlt} className='section6Imgs'/>
      <h2>{headingText}</h2>
      <p>{bodyText}</p>
      <Button buttonText={buttonText} />
    </div>
  )
}

function Button({buttonText}) {
  return (<button className='button redBtn'>{buttonText}</button>)
}
export default App;
