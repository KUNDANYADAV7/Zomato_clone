import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import css from './AddRestaurantHeader.module.css'
import Navbar from '../../Navbars/NavigationBar/NavigationBar';
import AddRestaurantMobileNavbar from '../../Navbars/AddRestaurantMobileNavbar/AddRestaurantMobileNavbar';
// import Logina from '../../Auth/Logina/Logina';
// import Signupa from '../../Auth/Signupa/Signupa';
// import css from './AddRestaurantHeader.module.css';
// import MapContainer from './MapContainer';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import banner from '/banners/banner2.jpg';
import { BsSearch, BsGeoAlt } from 'react-icons/bs'; 

const Add_restaurant = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('auth') || false);
  const [auth, setAuth] = useState({
      closed: true,
      login: false,
      signup: false
  });


  const renderBannerContent = () => {
    return (

      <div className={css.bannerInner}>
        <div className="container">
          <div className="row">
            <div className="col-md-2 h-50" style={{boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)', marginRight: '40px' }}>
              <h2 style={{fontSize:'20px'}}>Create your restaurant page</h2>
              <hr />
              <h3 style={{fontSize:'15px'}}>1. Restaurant Information</h3>
              <p style={{fontSize:'13px'}}>Restaurant name, address, contact no., owner details</p>
              <h3 style={{fontSize:'15px'}}>2. Restaurant Type & Timings</h3>
              <p style={{fontSize:'13px'}}>Establishment & cuisine type, opening hours</p>
              <h3 style={{fontSize:'15px'}}>3. Upload Images</h3>
              <p style={{fontSize:'13px'}}>Menu, restaurant, food images</p>
            </div>

            <div
              className="col-md-8"
              id="formContainer"
              style={{ height: 'calc(80vh - 56px)', overflowY: 'auto', marginTop: '20px',border:'1px solid black',width:'800px' }}
            >
              <form>
                <h2>Restaurant Information</h2>
                {/* Your form fields go here */}
                {/* Sample form fields for demonstration purposes */}
                <h4>Restaurant details</h4>
                <p>Name, address and location</p>
                <div className="form-group mt-4">
                  <input type="text" className="form-control p-3" id="restaurantName" placeholder="Restaurant name" />
                </div>

                <div className="form-group mt-4">
                <input type="text" className="form-control p-3" id="restaurantName" placeholder="Restaurant complete address" />
                </div>

                <div className="form-group mt-4 form-control text-danger">
                   <p>Please ensure this is same as the address on your FSSAI document (if applicable)</p>
                </div>
                
                <h4 className='mt-4'>Please place the pin accurately at your outlet’s location on the map</h4>
                <p>This will help your customers and Zomato riders to locate your store</p>
                {/* Add more form fields as needed */}

                <div className="form-group">
              <label htmlFor="restaurantLocality">Enter your restaurant’s locality</label>
              <div className="input-group mt-4">
                  <span className="input-group-text">
                    <BsSearch /> {/* Search icon */}
                  </span>
                <input
                  type="text"
                  className="form-control"
                  id="restaurantLocality"
                  placeholder="eg. Sector 43, Gurgaon"
                />
                  <span className="input-group-text" style={{ borderLeft: '1px solid #ccc' }}>
                    <BsGeoAlt /> {/* Location icon */}
                  </span>
                  <button className="btn btn-outline-secondary" type="button">
                    Detect {/* Detect button */}
                  </button>
                
              </div>
            </div>
            <div className='mt-4 d-flex justify-content-center align-items-center'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.49482607495!2d75.69903738855072!3d22.72388828988633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1704889674120!5m2!1sen!2sin"  style={{border:'0',height:'700px',width:'700px'}} allowFullScreen="" loading="lazy"  referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="position-relative  end-0 p-3">
            <a href="">or enter coordinates manually</a>
            </div>
              </form>

              <div className="container mt-4">
      {/* Other content */}
      
      {/* Styled div with black border */}
      <div className="border border-dark p-3">
        {/* Label for contact number */}
        <label htmlFor="contactNumber" className="mb-2 d-block">
          Contact number at restaurant
        </label>
        
        {/* Input for mobile number with special formatting */}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">+91</span>
          </div>
          <input
            type="text"
            className="form-control"
            id="contactNumber"
            placeholder="Mobile number"
            style={{width:'0px'}}
          />&nbsp;&nbsp;
          <button type="button" className="btn btn-primary">
          Your Button
        </button>
        </div>
      </div>
    </div>
            </div>
      
          </div>

        </div>

        
      
      </div>
    );
  };


const toggleBanner = toggleMenu ? (
    <div className={css.banner} style={{backgroundColor:''}}>
        <Navbar setToggleMenu={setToggleMenu} toogleMenu={toggleMenu} page="add-restaurant" />
        <hr style={{marginTop:'70px',color:'black'}}/>
        <br/><br/><br/><br/>
        {renderBannerContent()}
        <div className={css.modals}>
            {auth?.login ? <Login setAuth={setAuth} setLoggedIn={setLoggedIn} /> : null}
            {auth?.signup ? <Signup setAuth={setAuth} /> : null}
        </div>
    </div>
) : (
    <AddRestaurantMobileNavbar setToggleMenu={setToggleMenu} toogleMenu={toggleMenu} />
);

return toggleBanner;

}




export default Add_restaurant
