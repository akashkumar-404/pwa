import React from 'react'

import Logo from "./assets/ic_account_circle.svg"
import Logo1 from "./assets/ic_menu.svg"
import Logo2 from "./assets/Group_7_Copy.svg"
import Antivirus from "./assets/antivirus-banner.png"
const Navbar = () => {
  return (
    <div>
         <div className="header">
     <div className="headerFirst">
      <p className="help">Get  help:+1-888-801-1555</p>
     <div className="imgDiv">
      <img src={Logo} alt="error"/>
      <span className="imgSpan">|</span>
      <img src={Logo1} style={{marginLeft: "7px"}} alt="error"/>
    </div>
     </div>
     <br />
     <div id="firstSections" className="firstSection">
      <div >
        <div className="firstSectionfirst" >
          <img src={Logo2} alt="error"/>
          <p className="qikfox" >qikfox</p>
          <p> Antivirus + Safe Browser</p>
        </div>
        <div style={{marginLeft: "15px"}}>
          <div className="anti" >
          <p>Antivirus with Swarm Intelligence</p>
        </div>
        <div>
          <p className="headerPara" >Traditional Antivirus Systems are unable to safeguard you from 80% of online threats. According to surveys, only 12% of viruses come from file-based threats. Online Scams, Fake Websites, Fake Ads, Popups and Malicious Scripts are far bigger threats to you and your computer than traditional viruses. qikfox Safe Browser + Antivirus System keeps you safe from all types of online threats. </p>
        </div>  
        </div>
       
      </div>
      <div className="logo1">
        <img src={Antivirus} alt="error"/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar