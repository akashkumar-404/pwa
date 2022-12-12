import React from 'react'
import Line from './line'
import Image1 from "./assets/Group_17_Copy.svg";
import Image2 from "./assets/Group_98_Copy_2.svg";
import Image3 from "./assets/Group_47.svg"
const Images = () => {
  return (
    <div>
        <br /><br />
   
   <div id="firstImage" className="firstImg">
    <div>
      <img src={Image1} alt='error' />
    </div>
    <div className="firstImg1" >
      <p className="heroFirstP">Total Protection From online threat</p>
      <p className="heroSecondP">qikfox endpoint cybersecurity system takes a zero-trust approach towards online threats. This means all sources are considered untrustworthy untill they prove their credentials. This zero-trust approach combined with an integrated browser and an advanced antivirus and antimalware system makes qikfox cybersecurity suite super effective against online threats. </p>
       </div>
   </div>
   <br /><br />
   <Line />
   <br /><br />
   <div className="secondImg">
   
   <div className="secondImgDiv1">
     <p className="heroFirstP">Performance without compromise</p>
     <p className="heroSecondP" >qikfox Online Threat Protection Engine is mindful of system resources while scanning and monitoring threats. It takes into account all the system resources like RAM, CPU and storage space while running scans. In other words, qikfox Antimalware System does not slow your system down. It respects the system resources while keeping you safe.</p>
   </div>
   <div ></div>
      <div  style={{marginTop: '50px'}}>
       <img src={Image2} alt='error'/>
     </div>
  </div>

  <br /><br />
  <Line />
  <br /><br />
   <div>
   <div className="thirdImg" >
    <div className="thirdImg1">
      <img src={Image3} alt='error'/>
     
    </div>
    <div className="thirdImg2">
      <p className="heroFirstP" >Integrated with qikfox Safe Browser</p>
      <p  className="heroSecondP">qikfox Antivirus System is built right into qikfox Safe Browser. The integrated systems approach enables qikfox Antivirus System to block threats in real-time as you browse or navigate the web using search engines, email links or any other software. Deep integration with qikfox browser makes qikfox Antivirus System the most effective solution for endpoint security.</p>
    </div>
       
   </div>
  </div>
   <br /><br />
   <Line />
   <br /><br />
    </div>
  )
}

export default Images