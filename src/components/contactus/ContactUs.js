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
        {/* Include all your form fields here */}
        {/* <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
        /> */}
        <div>
          <section
            class=" py-3 py-md-5 py-xl-8"
            style={{ color: "#fff", backdropFilter: "blur(1px)" }}
          >
            <div class="container">
              <div class="row gy-3 gy-md-4 gy-lg-0 align-items-md-center">
                <div class="col-12 col-lg-6">
                  <div class="row justify-content-xl-center">
                    <div class="col-12 col-xl-11">
                      <h2 class="h1 mb-3">Get in touch</h2>
                      <p class="lead fs-4 text-secondary mb-5">
                        I'am always on the lookout to work with new clients. If
                        you're interested in working with me, please get in
                        touch in one of the following ways.
                      </p>
                      <div class="row mb-5">
                        <div class="col-12 col-sm-6">
                          <div class="d-flex mb-5 mb-sm-0">
                            <div class="me-4 text-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="currentColor"
                                class="bi bi-telephone-outbound"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                              </svg>
                            </div>
                            <div>
                              <h4 class="mb-3">Phone</h4>
                              <p class="mb-0">
                                <a
                                  class="link-secondary text-decoration-none"
                                  href="tel:+12269789548"
                                >
                                  +1 (226) 978-9548
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-6">
                          <div class="d-flex mb-0">
                            <div class="me-4 text-primary">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="currentColor"
                                class="bi bi-envelope-at"
                                viewBox="0 0 16 16"
                              >
                                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                              </svg>
                            </div>
                            <div>
                              <h4 class="mb-3">E-Mail</h4>
                              <p class="mb-0">
                                <a
                                  class="link-secondary text-decoration-none"
                                  href="mailto:rishhi.dev@gmail.com"
                                >
                                  rishhi.dev@gmail.com
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6">
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
          </section>
        </div>
      </form>
    </div>
  )
}

export default ContactUs
