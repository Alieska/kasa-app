import logo from "../assets/logo_blanc.png";

function Footer() {
const InfosLegales = "© 2020 Kasa. All rights reserved"
    return (
      <div className="footer">
        <img
          src={logo}
          alt="logo Kasa"
          className="footer_logo"
        />
        <p className="footer_infosLegales">{InfosLegales}</p>
      </div>
    );
  }
  
  export default Footer;