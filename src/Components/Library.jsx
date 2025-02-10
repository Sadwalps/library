import React from 'react'

function Library() {
  return (
    <>
     <div className='container-fluid mt-lg-4 mt-2 pt-lg-5 pt-3 pb-lg-5 pb-3 text-center ps-0 pe-0' >
     <div className="container-fluid text-center">
      <h1 style={{color:"rgb(177, 5, 77)",fontWeight:"900"}}>Our <span style={{color:"black"}}>Library</span></h1>
      <p className='mt-4'>"Visit us at your convenience! We’re open at Monday to Friday 9:30 am to 8:pm to serve you."</p>
    </div>
    <div className="container-fluid text-center  " style={{backgroundColor:"rgb(94, 5, 54)"}}>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 p-0 " id='libdiv'></div>
        <div className="col-md-3"></div>
      </div>
    </div>
    
    </div>
    </>
  )
}

export default Library