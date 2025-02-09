import React from 'react'

function Ourbooks() {
  return (
    <>
    <div className='container-fluid mt-lg-4 mt-2 pt-lg-5 pt-3 pb-lg-5 pb-3 text-center ps-0 pe-0' >
     <div className="container-fluid text-center">
      <h1 style={{color:"rgb(177, 5, 77)",fontWeight:"900"}}>Our <span style={{color:"black"}}>Library</span></h1>
      <p className='mt-4'>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
    </div>
    <div className="container-fluid mt-lg-5 mt-3">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-3 d-flex align-items-center mt-2 "><img src="https://media.istockphoto.com/id/1388048018/photo/open-book-toned-in-trendy-violet-very-peri-color-of-the-year-2022.jpg?b=1&s=170667a&w=0&k=20&c=K3R3-2hqRxdAXV50bEVNEM0AEm7MSFIMlUig6HD03lE=" alt="" className='w-100 rounded' /></div>
            <div className="col-md-4 mt-2"><img src="https://media.istockphoto.com/photos/open-book-toned-in-trendy-classic-blue-color-of-the-year-2020-picture-id1278773566?k=20&m=1278773566&s=612x612&w=0&h=ew4rBJiaQFVlmzrcFlUo8jOxfsnm9OBGn_LFOzKLRGg=" alt="" className='w-100 rounded' />
           
            </div>
            <div className="col-md-3 d-flex align-items-center mt-2"><img src="https://media.istockphoto.com/id/1388048018/photo/open-book-toned-in-trendy-violet-very-peri-color-of-the-year-2022.jpg?b=1&s=170667a&w=0&k=20&c=K3R3-2hqRxdAXV50bEVNEM0AEm7MSFIMlUig6HD03lE=" alt="" className='w-100 rounded' /></div>
            <div className="col-md-1"></div>
        </div>
    </div>
    <div className='mt-lg-4 mt-3'>
    <p className='mb-lg-5 mb-2 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, exercitationem!</p>
    <button className='mbut'>Read More</button>
    </div>
    </div>
    </>
  )
}

export default Ourbooks