import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../public/images/earthe10.jpg";

const AboutContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

                <div className="video-box">
                  <div
                    className="video-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>About Us</h2>
                  <p>
                  We are VNEU Holidays, a women entrepreneur-run tent stay nestled in the heart of Vattavada. We are two women who, after many years in the IT field, decided to follow our hearts and embrace our passion for travel and hospitality. Our journey led us to the enchanting village of Vattavada, a place that captured our hearts with its wild beauty and serene landscapes
                  </p>
                </div>

                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                  We aren't just another accommodation; we're a story waiting to be unveiled with you. Our tent stays built on the pillars of safety, comfort, and, most importantly, delicious, wholesome food. We cater to everyone – women, couples, or groups – because for us, human connection transcends gender. At VNEU Holidays, we believe in the power of stories and human connections. Every guest who steps through our doors is welcomed with open arms and treated like family. We cherish the moments spent sharing tales, laughter, and experiences around the campfire, 
                  creating bonds that transcend gender, age, and background...
                  </p>
                </div>

                {/* <div className="about-text">
                  <h4>Our History</h4>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the.
                  </p>
                </div> */}

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <ul>
                    <li>
                      {/* <i className="fa-solid fa-circle-check"></i> */}
                      Our mission is to offer a comfortable stay that feels like a home away from home. We encourage you to share your stories with us, as together we can create new memories for you to cherish and share with others upon your return. Let us help you leave behind any unwanted moments by exploring the beauty and tranquility of this paradise.
                    </li>
                    {/* <li>
                      <i className="fa-solid fa-circle-check"></i>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature.
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
