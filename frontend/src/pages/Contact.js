import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

class Contact extends React.Component {
  render() {
    return (
      <>
        
          <div className='body'>
            <div class="container main">
              
              <form action="#" className='frm'>
                <div className="frm1">
                <div class="title">Login</div>
                <div class="input-box underline">
                  <input type="text" placeholder="Enter Your Email" required />
                  <div class="underline"></div>
                </div>
                <div class="input-box">
                  <input type="password" placeholder="Enter Your Password" required />
                  <div class="underline"></div>
                </div>
                <div class="input-box button">
                  <input type="submit" name="" value="Continue" />
                </div>
              
              <div class="option">or Connect With Social Media</div>
              <div class="linkedin">
                <a href="" class="me-4 text-reset">
                  <i><FaLinkedin /></i>Sign in With Linkedin
                </a>
              </div>
              <div class="facebook">
                <a href="" class="me-4 text-reset">
                  <i><FaFacebookF /></i>Sign in With facebook
                </a>
              </div>
              <div class="twitter">
                <a href="" class="me-4 text-reset">
                  <i><FaTwitter /></i>Sign in With Twitter
                </a>
              </div>
              </div>
              </form>
            </div>
            </div>
        
        
      </>
    );
  }
}

export default Contact;