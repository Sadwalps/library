import React from 'react'
import { Link } from 'react-router-dom'

function Ourbooks() {
  return (
    <>
      <div className='container-fluid mt-lg-4 mt-2 pt-lg-5 pt-3 pb-lg-5 pb-3 text-center ps-0 pe-0' >
        <div className="container-fluid text-center">
          <h1 style={{ color: "rgb(177, 5, 77)", fontWeight: "900" }}>Our <span style={{ color: "black" }}> Books</span></h1>
          <p className='mt-4'>"libo offers an extensive collection of books, audiobooks across a wide variety of genres and topics. Whether you're looking for fiction, non-fiction, academic texts, or children's literature, we have something for everyone."</p>
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
          <p className='mb-lg-5 mb-2 mt-3'>
            Categories:

            Fiction: Novels, short stories, and plays from both classic and contemporary authors. <br />
            Non-Fiction: A diverse range of subjects including history, science, self-help, biographies, and more. <br />
            Children's Books: Engaging, educational, and fun books for children of all ages. <br />
            Reference & Academic: Textbooks, research papers, and specialized resources to support your academic needs. <br />
            E-books & Audiobooks: Access to digital and audio formats for on-the-go reading.
          </p>
          <Link to={'/Books'}><button className='mbut'>Check it</button></Link>
        </div>
      </div>
    </>
  )
}

export default Ourbooks