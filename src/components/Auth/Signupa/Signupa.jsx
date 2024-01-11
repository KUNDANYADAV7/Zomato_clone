// import { createPortal } from 'react-dom';

// import gLogo from '/images/google.png';
// import mailLogo from '/images/emailIcon.jpg';
// import closeBtn from '/images/closeBtn.jpg';

// import signupCss from './Signupa.module.css';

// let Signup = ({ setAuth }) => {
//     let loginDiv = <div className={signupCss.outerDiv}>
//         <div className={signupCss.modal}>
//             <div className={signupCss.header}>
//                 <span className={signupCss.ttl}>Signup</span>
//                 <span className={signupCss.closeBtn} onClick={() => setAuth({ closed: true, login: false, signup: false })}>
//                     <img className={signupCss.closeBtnImg} src={closeBtn} alt="close button" />
//                 </span>
//             </div>
//             <div className={signupCss.lgBox}>
//                 <input className={signupCss.inpBox} type="text" placeholder='Full Name ...' />
//                 <input className={signupCss.inpBox} type="email" placeholder='Email ...' />
//                 <input className={signupCss.inpBox} type="text" placeholder="HotelName ..." />
//           {/* <input
//             className={signupCss.inpBox}
//             type="password"
//             placeholder="Confirm Password ..."
//           /> */}
//           <input className={signupCss.inpBox} type="text" placeholder="Phone Number ..." />
//           <input className={signupCss.inpBox} type="text" placeholder="Address ..." />
//                 <span className={signupCss.termsTxt}>
//                     <input type="checkbox" name="accpect" id="accpect" className={signupCss.checkBox} />
//                     <span>
//                         I agree to Zomato's <a href="" className={signupCss.termaAnchor}>Terms of Service, Privacy Policy</a> and <a href="" className={signupCss.termaAnchor}>Content Policies</a>
//                     </span>
//                 </span>
//                 <button className={signupCss.btn}>Create Account</button>
//             </div>
//             <div className={signupCss.orBreak}><span className={signupCss.orBreakText}>or</span></div>
//             <div className={signupCss.socialSignupBox}>
//                 <img className={signupCss.icon} src={gLogo} alt="google login" />
//                 Continue with Google
//             </div>
//             <hr className={signupCss.break} />
//             <div className={signupCss.newToZomato}>Already have an account? <div className={signupCss.createAcc} onClick={() => setAuth({ closed: false, login: true, signup: false })} >Log in</div></div>
//         </div>
//     </div>
//     return createPortal(loginDiv, document.getElementById('modal'));
// }

// export default Signup;

import React from 'react';
import { createPortal } from 'react-dom';

import gLogo from '/images/google.png';
import mailLogo from '/images/emailIcon.jpg';
import closeBtn from '/images/closeBtn.jpg';

import signupCss from './Signupa.module.css';
import Add_restaurant from '../Add_restaurant/Add_restaurant';

const Signup = ({ setAuth, isLoggedIn }) => {
  // If the user is logged in, render the Add_restaurant component
  if (isLoggedIn) {
    return <Add_restaurant />;
  }

  // If the user is not logged in, render the signup component
  const signupDiv = (
    <div className={signupCss.outerDiv}>
      <div className={signupCss.modal}>
        <div className={signupCss.header}>
          <span className={signupCss.ttl}>Signup</span>
          <span className={signupCss.closeBtn} onClick={() => setAuth({ closed: true, login: false, signup: false })}>
            <img className={signupCss.closeBtnImg} src={closeBtn} alt="close button" />
          </span>
        </div>
        <div className={signupCss.lgBox}>
          <input className={signupCss.inpBox} type="text" placeholder='Full Name ...' />
          <input className={signupCss.inpBox} type="email" placeholder='Email ...' />
          <input className={signupCss.inpBox} type="text" placeholder="HotelName ..." />
          {/* <input
            className={signupCss.inpBox}
            type="password"
            placeholder="Confirm Password ..."
          /> */}
          <input className={signupCss.inpBox} type="text" placeholder="Phone Number ..." />
          <input className={signupCss.inpBox} type="text" placeholder="Address ..." />
          <span className={signupCss.termsTxt}>
            <input type="checkbox" name="accpect" id="accpect" className={signupCss.checkBox} />
            <span>
              I agree to Zomato's <a href="" className={signupCss.termaAnchor}>Terms of Service, Privacy Policy</a> and <a href="" className={signupCss.termaAnchor}>Content Policies</a>
            </span>
          </span>
          <button className={signupCss.btn}>Create Account</button>
        </div>
        <div className={signupCss.orBreak}><span className={signupCss.orBreakText}>or</span></div>
        <div className={signupCss.socialSignupBox}>
          <img className={signupCss.icon} src={gLogo} alt="google login" />
          Continue with Google
        </div>
        <hr className={signupCss.break} />
        <div className={signupCss.newToZomato}>Already have an account? <div className={signupCss.createAcc} onClick={() => setAuth({ closed: false, login: true, signup: false })} >Log in</div></div>
      </div>
    </div>
  );

  return createPortal(signupDiv, document.getElementById('modal'));
}

export default Signup;
