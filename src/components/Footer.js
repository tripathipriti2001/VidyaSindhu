import React from 'react';
import AcharyaShree from '../images/footer.jpeg';
import './static/Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={AcharyaShree} alt='LOGO' />
        </div>
        <div className="footer-about">
          <p>
            Sant shiromani acharya guruvar shree 108 Vidyasagar ji maharaj ki prerna se aaj pratibhasthali, gaushalayein, hathkargha aadi kai deshhit aur samaajhit ke uddeshya se prarambhit karya sucharu roop se chal rahe hain. namostu namostu namostu!
          </p>
        </div>
        <div className="footer-contact">
          <h4>Astha Jain</h4>
          <p>astha.kila@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

