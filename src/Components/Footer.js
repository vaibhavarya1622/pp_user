import React from "react";
import "../css/Footer.css"
import fb from "../images/fb@2x.png";
import linkin from "../images/linked_in@2x.png";
import insta from "../images/insta@2x.png";
import logo from "../images/PP_logo_yellow.png";
import call from "../images/ID115-1157139_contact-icon-png.png";
import address from "../images/Address_icon2x.png";
import mail from "../images/ID213-2133056_icon-mail-png-ro.png";

function Footer() {
  return (
    <div className="footer">
      <img className="footer_logo" src={logo} alt="logo" />
      <div className="footer_dialog">
        <div className="footer_logos">
          <a href="https://www.facebook.com/PriorityPulse/">
            <img src={fb} alt="facebook" />
          </a>
          <a href="https://www.linkedin.com/company/priority-pulse-pvt">
            <img src={linkin} alt="linked in" />
          </a>
          <a href="https://www.instagram.com/priority_pulse/">
            <img
              href="https://www.instagram.com/priority_pulse/"
              src={insta}
              alt="instagram"
            />
          </a>
        </div>
        <div className="footer_foottextcontainer">
          <div className="footer_foottext">
            <img src={call} alt="phone" />
            <div>+91 91826 87397</div>
          </div>
          <div className="footer_foottext">
            <img src={address} alt="address" />
            <div>MCIIE, IIT (BHU) Varanasi</div>
          </div>
          <div className="footer_foottext">
            <img src={mail} alt="mail" />
            <div>prioritypulse@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
