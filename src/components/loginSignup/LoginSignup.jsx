import React, {useState} from 'react';
import './LoginSignup.css';

import icon_user from '../assets/person.png';
import icon_email from '../assets/email.png';
import icon_password from '../assets/password.png';

const LoginSignup = () => {

    const [ready, setReady] = useState('Sign Up')

  return (
    <div className="container">

    <div className="header">
        <div className="text">{ready}</div>
        <div className="underline"></div>
    </div>

    <div className="inputs">

    {ready === 'Login' 
    ? 
    <div></div> 
    : 
    <div className="input">
        <img src={icon_user} alt="" />
        <input type="text"  placeholder='NAME'/>
    </div>}

    <div className="input">
        <img src={icon_email} alt="" />
        <input type="email"  placeholder='EMAIL'/>

    </div>

    <div className="input">
        <img src={icon_password} alt="" />
        <input type="password"  placeholder='PASSWORD'/>

    </div>

    </div>


    {ready === 'Sign Up' ? <div></div> : <div className="forgot-password">Lost password? <span>Click here</span></div>
    }
    <div className="submit-container">

        <div className={ready === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => setReady('Sign Up')}>Login</div>
        <div className={ready === 'Login' ? 'submit gray' : 'submit' } onClick={() => setReady('Login')}>Sign Up</div>
    </div>



    </div>
  )
}

export default LoginSignup