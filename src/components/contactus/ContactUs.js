import React, { useState } from "react"
import emailjs from "emailjs-com"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_l2ondi1", // Replace 'service_l2ondi1' with your actual service ID
        "template_hv5oojq", // Replace 'template_hv5oojq' with your actual template ID
        e.target,
        "gu-wmeyRGBxPrhGSL" // Replace 'your_user_id' with your actual EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent!")
          alert("Email successfully sent!")
        },
        (error) => {
          console.log("Failed to send email:", error)
          alert("Failed to send email.")
        }
      )
  }

  return (
    <div>
      <form onSubmit={sendEmail}>
        <section
          className="py-3 py-md-5 py-xl-8"
          style={{ color: "#fff", backdropFilter: "blur(1px)" }}
        >
          <div className="container">
            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-md-center">
              <div className="col-12 col-lg-6">
                <div className="row justify-content-xl-center">
                  <div className="col-12 col-xl-11">
                    <h2 className="h1 mb-3">Get in touch</h2>
                    <p className="lead fs-4 text-secondary mb-5">
                      I'm always on the lookout to work with new clients. If
                      you're interested in working with me, please get in touch
                      in one of the following ways.
                    </p>
                    <div className="border rounded shadow-sm overflow-hidden">
                      <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                        <div className="col-12">
                          <label htmlFor="fullname" className="form-label">
                            Full Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="email" className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="phone" className="form-label">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="subject" className="form-label">
                            Subject <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className="form-label">
                            Message <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="3"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button
                              className="btn btn-primary btn-lg"
                              type="submit"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  )
}

export default ContactUs
