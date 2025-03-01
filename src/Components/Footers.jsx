import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Placeholder } from 'react-bootstrap'

function Footers() {
  return (
   <>
   <div className="container-fluid " id='footermaindiv'>
    <div className="row pt-4 pb-5">
      <div className="col-md-1"></div>
      <div className="col-md-4 mt-1 ">
        <h4 style={{color:"white"}}><u>Follow Us</u></h4>
        
        <div className='d-flex gap-3 w-100 mt-4'>
          <div className='footerlogodiv'><FontAwesomeIcon icon={faFacebookF} className='footerlogof'  /></div>
          <div className='footerlogodiv'><FontAwesomeIcon icon={faTwitter} className='footerlogot' /></div>
          <div className='footerlogodiv'><FontAwesomeIcon icon={faLinkedin} className='footerlogol'/></div>
          <div className='footerlogodiv'><FontAwesomeIcon icon={faInstagram} className='footerlogoi'/></div>
        </div>
      </div>
      <div className="col-md-6 mt-lg-1  mt-4">
       
      <h4 style={{color:"white"}}><u>Newsletter</u></h4>
      <form action="">
     <div className="row mt-4 ">
      
      <div className="col-md-9 mt-1">
        <input type="text" style={{outline:"none",border:"0px", width:"100%",height:"47px"}} className='p-4' placeholder='Enter your email' />
      </div>
      <div className="col-md-3  mt-lg-1 mt-3">
        <button className='btn w-lg-100  rounded-0' id='footerbtn' type='reset'>Subscribe</button>
      </div>
     </div>
     </form>
      <div>

      </div>
      
      </div>
      <div className="col-md-1"></div>
    </div>
    
      
    
   </div>
   </>
  )
}

export default Footers