import React from 'react'
import './Footer.css'
// import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                {/* <img src={assets.logo} alt="" className="" /> */}
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore dolore ab sunt quas culpa, officia mollitia earum vitae dolor, eos sit, temporibus accusantium iste natus ad! Nisi obcaecati aliquid veniam, officia quam reiciendis sunt.</p>
                {/* <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" className="" />
                    <img src={assets.linkedin_icon} alt="" className="" />
                    <img src={assets.twitter_icon} alt="" className="" />
                </div> */}
            </div>
            <div className="footer-content-center">
                 <h2 className="COMPANY"></h2>
                 <ul>
                    <li>Facebook <i className="fa-brands fa-facebook"></i></li>
                    <li> Linkedin <i className="fa-brands fa-linkedin"></i></li>
                    <li>Twitter <i className="fa-brands fa-twitter"></i></li>
                 </ul>
            </div>
            <div className="footer-content-right">
                <h2 className="">GET IN TOUCH</h2>
                <ul>
                    <li>9876543210</li>
                    <li>contact@edusity.com</li>
                </ul>
            </div>
        </div>
        <hr className="
        " />
        <p className="footer-copyright">
            Copyright 2024 © Edusity.com - All Right Reserved
        </p>
    </div>
  )
}

export default Footer