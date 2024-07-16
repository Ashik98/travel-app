import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-mail"></i>
                </div>
                <h3>Mail Here</h3>
                <p>
                  <a href="mailto:contact@ashiktom.me">admin@vneu.com</a>
                </p>
                <p>
                  <a href="mailto:contact@ashiktom.me">info@vneu.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-map-2"></i>
                </div>
                <h3>Visit Here</h3>
                <p>
                  Vattavada, Munnar, <br /> KERALA 686652, IND
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-call"></i>
                </div>
                <h3>Call Here</h3>
                <p>
                  <a href="tel:+919567495429">+91 9567495429</a>
                </p>
                <p>
                  <a href="tel:+919567495429">+91 9567495429</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
