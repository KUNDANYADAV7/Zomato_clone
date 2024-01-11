import { useState } from 'react';

import PlacesCard from '../../../utils/Cards/card3/PlacesCard'
import ShowMore from '../../../utils/Cards/card3/ShowMore'
import 'bootstrap/dist/css/bootstrap.min.css';

import css from './PopularPlaces.module.css';
// import { orderOnlinePage, diningOutPage, proAndProPlusPage, nightLifePage } from './helpers/constants';
import { orderOnlinePage } from '../../../helpers/constants';

let PopularPlaces = () => {
    let [showMore, setShowMore] = useState();
    return <div className={css.outerDiv}>
        <div className={css.title} style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'20px'}}><span className={css.titleTxt}>Popular locations in <img src='https://cdn.countryflags.com/thumbs/india/flag-400.png' style={{height:'30px',width:'50px'}} className='rounded'/> India</span></div>
        <div style={{margin: '0 auto', textAlign: 'center'}}>
            <p style={{fontSize:'21px',color:'grey',marginBottom:'1px'}}>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food,</p>
            <p style={{fontSize:'21px',marginBottom:'1px',color:'grey'}}>Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users </p>
            <p style={{fontSize:'21px',color:'grey',marginBottom:'1px'}}>just like you, to find your next great meal.</p>
        </div>
        <div className={css.placesCards}>
            <PlacesCard place="Agra Restaurants" count="" link={"/show-case?page=" + orderOnlinePage} />
            <PlacesCard place="Ahemdabad Restaurants" count="" link={"/show-case?page=" + orderOnlinePage} />
            <PlacesCard place="Ajmer Restaurants" count="" link={"/show-case?page=" + orderOnlinePage} />
            <PlacesCard place="Alappuzha Restaurants" count="" link={"/show-case?page=" + orderOnlinePage} />
            <PlacesCard place="Allahabad Restaurants" count="" link={"/show-case?page=" + orderOnlinePage} />
            <PlacesCard place="Amravati Restaurants" count="" link={"/show-case?page=" + orderOnlinePage} />
            <PlacesCard place="Amritsar Restaurants" count="" link={"/show-case?page=" + orderOnlinePage} />
            <PlacesCard place="Aurangabad Restaurants" count="" link={"/show-case?page=" + orderOnlinePage} />
            <PlacesCard place="Bengaluru Restaurants" count="" link={"/show-case?page=" + orderOnlinePage} />
            <PlacesCard place="Bhopal Restaurants" count="" link={"/show-case?page=" + orderOnlinePage} />
            <PlacesCard place="Bhubaneswar Restaurants" count="" link={"/show-case?page=" + orderOnlinePage} />
            <PlacesCard place="Chandigarh Restaurants" count="" link={"/show-case?page=" + orderOnlinePage} />
            <PlacesCard place="Chennai Restaurants" count="" link={"/show-case?page=" + orderOnlinePage} />
            <PlacesCard place="Coimbatore Restaurants" count="" link={"/show-case?page=" + orderOnlinePage} />
            <PlacesCard place="Cuttack Restaurants" count="" link={"/show-case?page=" + orderOnlinePage} />
            {/* <ShowMore setShowMore={setShowMore} /> */}
        </div>
    </div>
}

export default PopularPlaces;