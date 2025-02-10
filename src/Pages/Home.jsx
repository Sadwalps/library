import React from 'react'
import Aboutus from '../Components/Aboutus'
import Library from '../Components/Library'
import Ourbooks from '../Components/Ourbooks'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'



function Home() {
  
  return (
    <>
    <div className="container-fluid" id="homemaindiv">
      <div className="row">
        <div className="col-md-8"  id='homesubdiv'>
        <h1 >The Best Library That
     Every Book Lover Must
     Visit!</h1>
      <p className='mt-lg-4 mt-2' style={{fontWeight:"600", fontSize:"20px" }}>"Welcome to libo, your gateway to knowledge, adventure, and discovery. Whether you're here to dive into the latest bestseller or explore timeless classics, our library offers a wealth of resources for every reader.</p>
      <Link to={'/Books'}><button className='mbut'>Read More</button></Link>
      <div className='d-flex gap-3  mt-4'>
                <div className='footerlogodiv' style={{color:"black"}}><FontAwesomeIcon icon={faFacebookF} className='footerlogof'  /></div>
                <div className='footerlogodiv' style={{color:"black"}}><FontAwesomeIcon icon={faTwitter} className='footerlogot' /></div>
                <div className='footerlogodiv' style={{color:"black"}}><FontAwesomeIcon icon={faLinkedin} className='footerlogol'/></div>
                <div className='footerlogodiv' style={{color:"black"}}><FontAwesomeIcon icon={faInstagram} className='footerlogoi'/></div>
              </div>
 
        </div>
        <div className="col-md-4"></div>
      </div>
     
    </div>
    
    <Aboutus/>
    <Library/>
    <Ourbooks/>
    
   
    </>
  )
}

export default Home