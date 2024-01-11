// import { useState } from 'react';
// import { Link } from 'react-router-dom'

// import Navbar from '../../Navbars/NavigationBar/NavigationBar'
// import AddRestaurantMobileNavbar from '../../Navbars/AddRestaurantMobileNavbar/AddRestaurantMobileNavbar';
// import Logina from '../../Auth/Logina/Logina';
// import Signupa from '../../Auth/Signupa/Signupa';
// import css from './AddRestaurantHeader.module.css'

// import banner from '/banners/banner2.jpg'

// let AddRestaurantHeader = () => {
//     let [toogleMenu, setToggleMenu] = useState(true);
//     let [loggedIn, setLoggedIn] = useState(localStorage.getItem('auth') || false);
//     let [auth, setAuth] = useState({
//         closed: true,
//         logina: false,
//         signupa: false
//     });
//     let toggleBanner = toogleMenu ? (<div className={css.banner}>
//         <Navbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} page="add-restaurant" />
//         <div className={css.bannerInner}>
//             <img src={banner} alt="banner" className={css.bannerImg} />
//             <div className={css.bannerTxt}>
//                 <div className={css.title}>Partner with Zomato
//                                                               <br/>at 0% commission for the 1st month!</div>
//                 <div className={css.tag}>And get ads worth INR 1500. Valid for new restaurant partners in select cities.</div>
//                 <div className={css.btns}>
//                     <a  className={css.btn} onClick={() => setAuth({ closed: false, login: false, signupa: true })}>Register your restaurant</a>
//                     <a className={css.btn} onClick={() => setAuth({ closed: false, logina: true, signupa: false })}>Login to view your existing restaurants</a>
//                 </div>
//             </div>
//         </div>
//         <div className={css.modals}>
//         {auth?.logina ? <Logina setAuth={setAuth} setLoggedIn={setLoggedIn} /> : null}
//         {auth?.signupa ? <Signupa setAuth={setAuth} /> : null}
//     </div>
//     </div>) : <AddRestaurantMobileNavbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} />

//     return toggleBanner;
// }

// export default AddRestaurantHeader;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../Navbars/NavigationBar/NavigationBar';
import AddRestaurantMobileNavbar from '../../Navbars/AddRestaurantMobileNavbar/AddRestaurantMobileNavbar';
import Logina from '../../Auth/Logina/Logina';
import Signupa from '../../Auth/Signupa/Signupa';
import css from './AddRestaurantHeader.module.css';

import banner from '/banners/banner2.jpg';

const AddRestaurantHeader = () => {
    const [toggleMenu, setToggleMenu] = useState(true);
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('auth') || false);
    const [auth, setAuth] = useState({
        closed: true,
        logina: false,
        signupa: false
    });

    const renderBannerContent = () => {
        return (
            <div className={css.bannerInner}>
                <img src={banner} alt="banner" className={css.bannerImg} />
                <div className={css.bannerTxt}>
                    <div className={css.title}>Partner with Zomato
                        <br />at 0% commission for the 1st month!</div>
                    <div className={css.tag}>And get ads worth INR 1500. Valid for new restaurant partners in select cities.</div>
                    {loggedIn ? (
                        <div className={css.btns}>
                            <Link to="/Add_restaurant" className={css.btn}>View your existing restaurants</Link>
                        </div>
                    ) : (
                        <div className={css.btns}>
                            <a className={css.btn} onClick={() => setAuth({ closed: false, login: false, signupa: true })}>Register your restaurant</a>
                            <a className={css.btn} onClick={() => setAuth({ closed: false, logina: true, signupa: false })}>Login to view your existing restaurants</a>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const toggleBanner = toggleMenu ? (
        <div className={css.banner}>
            <Navbar setToggleMenu={setToggleMenu} toogleMenu={toggleMenu} page="add-restaurant" />
            {renderBannerContent()}
            <div className={css.modals}>
                {auth?.logina ? <Logina setAuth={setAuth} setLoggedIn={setLoggedIn} /> : null}
                {auth?.signupa ? <Signupa setAuth={setAuth} /> : null}
            </div>
        </div>
    ) : (
        <AddRestaurantMobileNavbar setToggleMenu={setToggleMenu} toogleMenu={toggleMenu} />
    );

    return toggleBanner;
};

export default AddRestaurantHeader;
