import { useState } from 'react';

import Navbar from '../../Navbars/NavigationBar/NavigationBar'
import MobileNavbar from '../../Navbars/MobileNavbar/MobileNavbar';
import SearchBar from '../../../utils/SearchBar/SearchBar'

import css from './HomePageBanner.module.css'
import { motion } from "framer-motion";
import banner from '/banners/banner1.jpg'

let HomePageBanner = () => {
    let [toogleMenu, setToggleMenu] = useState(true);

    let toggleBanner = toogleMenu ? (<div className={css.banner}>
        <Navbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} />
        <motion.div
   initial={{ opacity: 0, scale: 0.5 }}
   animate={{ opacity: 1, scale: 1 }}
   transition={{
     duration: 0.8,
     delay: 0.5,
     ease: [0, 0.71, 0.2, 1.01]
   }} className={css.bannerInner}>
            <img src={banner} alt="banner" className={css.bannerImg} />
            <div className={css.bannerTxt}>
                <div className={css.title} style={{fontFamily:'sans-serif'}}>Zomato</div>
                <div className={css.tag} style={{display:'',justifyContent:'center',alignItems:'center'}}>Find the best restaurants, cafés <br></br><span>and bars in India</span></div>
                <div className={css.searchbar}>
                    {/* <SearchBar /> */}
                </div>
            </div>
        </motion.div>
    </div>) : <MobileNavbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} />

    return toggleBanner;
}

export default HomePageBanner