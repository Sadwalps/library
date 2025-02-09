import React from 'react'

function Aboutus() {
  return (
    <>
    <div className='container-fluid pt-lg-5 pt-3 pb-lg-5 pb-3'  id='aboutmaindiv'>
    <div className="container-fluid text-center">
      <h1 style={{color:"rgb(177, 5, 77)",fontWeight:"900"}}>About <span style={{color:"black"}}>Us</span></h1>
      <p className='mt-4'>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
    </div>
    {/* box */}
    <div className='container-fluid mt-5 '>
      <div className="row m-1">
        <div className="col-md-1"></div>
        <div className="col-md-10" style={{border:"3px solid rgb(194, 8, 110)", borderRadius:"10px"}}>
          <div className="row p-lg-5 p-2">
            <div className="col-md-7">
              <p style={{textAlign:"justify"}}>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              <button className='mbut'>Read More</button>
            </div>
            <div className="col-md-5">
              <img src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?cs=srgb&dl=bookcase-books-bookshelves-159711.jpg&fm=jpg" alt="about image" className='w-100 rounded mt-lg-1 mt-3' />
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>

    </div>
    </div>
    </>
  )
}

export default Aboutus