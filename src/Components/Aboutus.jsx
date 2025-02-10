import React from 'react'
import { Link } from 'react-router-dom'

function Aboutus() {
  return (
    <>
      <div className='container-fluid pt-lg-5 pt-3 pb-lg-5 pb-3' id='aboutmaindiv'>
        <div className="container-fluid text-center">
          <h1 style={{ color: "rgb(177, 5, 77)", fontWeight: "900" }}>About <span style={{ color: "black" }}>Us</span></h1>
          <p className='mt-4'> "At libo, our mission is to provide access to a diverse range of knowledge and to serve as a center for education, cultural exchange, and lifelong learning. We believe in fostering a space that is welcoming, inclusive, and accessible for everyone in our community."</p>
        </div>
        {/* box */}
        <div className='container-fluid mt-5 '>
          <div className="row m-1">
            <div className="col-md-1"></div>
            <div className="col-md-10" style={{ border: "3px solid rgb(194, 8, 110)", borderRadius: "10px" }}>
              <div className="row p-lg-5 p-2">
                <div className="col-md-7">
                  <p style={{ textAlign: "justify" }}>History: "Founded in 2022, our library has been a cornerstone of Thrissur, supporting generations of learners, researchers, and book lovers. From humble beginnings to a thriving hub of intellectual and social engagement, we have grown to serve thousands of patrons annually." <br />

                    Core Values:

                    Accessibility: We strive to provide resources and services that are open to all. <br />
                    Inclusion: Our library embraces diverse perspectives and encourages dialogue. <br />
                    Learning: We believe that every visit to the library is an opportunity to learn something new. <br />
                    Community: We are dedicated to being a place where people connect and grow together.</p>
                  <Link to={'/Books'}><button className='mbut'>Check it</button></Link>
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