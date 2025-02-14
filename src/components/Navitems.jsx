import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png"

const Navitems = () => {
    const [menuToggle,setMenuTogggle]=useState(false);
    const [socialToggle,setSocialTogggle]=useState(false);
    const [headerfixed,setHeaderFixed]=useState(false);

    //addevant listener
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 200){
            setHeaderFixed(true);
        }else{
            setHeaderFixed(false);
        }
    })
  return (
    <header className={`header-section style-4 ${headerfixed ? "header-fixed fadeInUp" :""}`}>
        {/* header top start */}
        <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to='/signup' className='lab-btn me-3'><span>Create account</span></Link>
                    <Link to='/login'>Login</Link>
                </div>
            </div>

        </div>
        {/* header button */}
        <div className='header button'>
            <div className='container'>
                <div className='header-wrapper'>
                    {/* logo */}
                    <div className='logo-search-acte'>
                        <Link to={'/'}>
                        <img src={logo} alt="" />
                        </Link>

                    </div>
                    {/* menu area */}
                    <div className='menu-area'>
                        <div className='menu'>
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/shop'>Shop</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>

                            </ul>
                            
                        </div>
                        {/* signin and login */}
                        <Link to='/sign-up' className='lab-btn me-3 d-none d-md-block'>
                        Create Account
                        </Link>
                        <Link to='/log-in' className='d-none d-md-block'>
                        Login
                        </Link>

                        {/* menu toggler */}
                        <div onClick={()=>setMenuTogggle(!menuToggle)} className={`header-bar-d-lg-none ${menuToggle ? "active" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {/* social toggler */}
                        <div className='ellepsis-bar d-md-none'
                        onClick={()=>setSocialTogggle(!socialToggle)}>


                        <i classname="icofont-info-square"></i>


                        </div>

                    </div>
                    

                </div>
            </div>
        </div>
    </header>
  )
}

export default Navitems