import React from 'react'
import { GrpLogo } from '../../assets';
import './footer.styles.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-content left-footer">
            <img className='footer-logo' src={GrpLogo} alt="" />
           <p>Made By Arctic Apes</p> 
        </div>
        <div className="footer-content contributors">
            <h4>Contributors</h4>
            <a href="https://github.com/siddhantprateek">Siddhant Prateek Mahanayak</a>
            <a href="https://github.com/nikhitaBarat/">Barat Nikhita</a>
            <a href="https://github.com/suvangipaul">Suvangi Paul</a>
        </div>
    </footer>
  )
}

export default Footer