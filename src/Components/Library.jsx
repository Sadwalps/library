import React from 'react'

function Library() {
  return (
    <>
     <div className='container-fluid mt-lg-4 mt-2 pt-lg-5 pt-3 pb-lg-5 pb-3 text-center ps-0 pe-0' >
     <div className="container-fluid text-center">
      <h1 style={{color:"rgb(177, 5, 77)",fontWeight:"900"}}>Our <span style={{color:"black"}}>Library</span></h1>
      <p className='mt-4'>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
    </div>
    <div className="container-fluid text-center  " style={{backgroundColor:"rgb(94, 5, 54)"}}>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 p-0 " id='libdiv'></div>
        <div className="col-md-3"></div>
      </div>
    </div>
    <div className='mt-lg-4 mt-3'>
    <button className='mbut'>Read More</button>
    </div>
    </div>
    </>
  )
}

export default Library