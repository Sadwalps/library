import React, { useState } from 'react'

function Contact() {
  const [messageDetails, setMessageDetails] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  })
  console.log(messageDetails);

  const handleSend = (e) => {
    e.preventDefault()
    const { name, phone, email, message } = messageDetails
    console.log(name, phone, email, message);
    if (!name || !phone || !email || !message) {
      alert(`Fill the completely`)
    } else {
      alert(`Message sent successfully`)
      handleCancel()
    }
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setMessageDetails({
      name: "",
      phone: "",
      email: "",
      message: ""
    })
  }

  return (
    <>
      <div className="container-fluid bg-dark pt-lg-5 pt-2 pb-5 text-center">
        <form action="">
          <div className="row">
            <div className="col-md-1">sd</div>
            <div className="col-md-10">
              <div className="row">
                <h1 className='text-light mt-lg-5 mt-3 mb-lg-4 mb-2'>Contact</h1>
                <div className="col-md-3 mt-lg-5 mt-3 "><input value={messageDetails.name} onChange={(e) => setMessageDetails({ ...messageDetails, name: e.target.value })} type="text" style={{ outline: "none", border: "0px", width: "100%", height: "47px" }} className='p-4' placeholder='Name' /></div>
                <div className="col-md-3 mt-lg-5 mt-3"><input value={messageDetails.phone} onChange={(e) => setMessageDetails({ ...messageDetails, phone: e.target.value })} type="text" style={{ outline: "none", border: "0px", width: "100%", height: "47px" }} className='p-4' placeholder='Phone Number' /></div>
                <div className="col-md-3 mt-lg-5 mt-3"><input value={messageDetails.email} onChange={(e) => setMessageDetails({ ...messageDetails, email: e.target.value })} type="email" style={{ outline: "none", border: "0px", width: "100%", height: "47px" }} className='p-4' placeholder='Email' /></div>
                <div className="col-md-3 mt-lg-5 mt-3"><input value={messageDetails.message} onChange={(e) => setMessageDetails({ ...messageDetails, message: e.target.value })} type="text" style={{ outline: "none", border: "0px", width: "100%", height: "47px" }} className='p-4' placeholder='Message' /></div>
              </div>
            </div>
            <div className="col-1">dsas</div>
          </div>
          <div className='mt-lg-5 mt-2 mb-lg-5 mb-2  pb-lg-4 pb-2'>
            <button onClick={(e) => handleSend(e)} className='btn rounded-0  mx-1 my-1' id='contactbtn'> Send</button>
            <button onClick={(e) => handleCancel(e)} className='btn rounded-0  mx-1 my-1' id='contactbtn'> Cancel</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact