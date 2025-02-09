import React from 'react'

function Contact() {
  return (
 <>
  <div className="container-fluid bg-dark pt-lg-5 pt-2 pb-5 text-center">
    <div className="row">
      <div className="col-md-1">sd</div>
      <div className="col-md-10">
        <div className="row">
          <h1 className='text-light mt-lg-5 mt-3 mb-lg-4 mb-2'>Contact</h1>
          <div className="col-md-3 mt-lg-5 mt-3 "><input type="text" style={{outline:"none",border:"0px", width:"100%",height:"47px"}} className='p-4' placeholder='Name' /></div>
          <div className="col-md-3 mt-lg-5 mt-3"><input type="text" style={{outline:"none",border:"0px", width:"100%",height:"47px"}} className='p-4' placeholder='Phone Number' /></div>
          <div className="col-md-3 mt-lg-5 mt-3"><input type="text" style={{outline:"none",border:"0px", width:"100%",height:"47px"}} className='p-4' placeholder='Email' /></div>
          <div className="col-md-3 mt-lg-5 mt-3"><input type="text" style={{outline:"none",border:"0px", width:"100%",height:"47px"}} className='p-4' placeholder='Message' /></div>
          
        </div>
      </div>
    
      <div className="col-1">dsas</div>
      
    </div>
    <div className='mt-lg-5 mt-2 mb-lg-5 mb-2   pb-lg-4 pb-2'>
    <button className='btn rounded-0  ' id='contactbtn'>Send</button>
    </div>
  </div>
 </>
  )
}

export default Contact