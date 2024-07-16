import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../public/images/earthe9.jpg";

const HavenEscape = () => {
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
                  alt="About Us"
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
                  <h2>Haven Escape</h2>
                  <p>
                  Escape to the tranquil landscapes of Vattavada with our exclusive tent stay package, designed to offer you a blend of comfort and adventure
                  </p>
                </div>

                <div className="about-text">
                  <h4>Package Includes</h4>
                  <ul>
                    <li><i className="fa-solid fa-circle-check"></i>Accommodation in a spacious and cozy tent</li>
                    <li><i className="fa-solid fa-circle-check"></i>Breakfast & Dinner with fresh local ingredients</li>
                    <li><i className="fa-solid fa-circle-check"></i>Guided nature walk to explore nearby waterfalls & viewpoints</li>
                    <li><i className="fa-solid fa-circle-check"></i>Complimentary tea/coffee at morning & evening</li>
                    <li><i className="fa-solid fa-circle-check"></i>Free Wi-Fi access in common areas</li>
                    <li><i className="fa-solid fa-circle-check"></i>Local fruit farm visit and tasting</li>
                  </ul>
                </div>

                <div className="about-text">
                  <h4>Price</h4>
                  <p>
                    Starting from Rs.1500/- per person
                    Book Now to discover the authentic charm of Vattavada in our Earthen Escape Package!
                  </p>
                </div>

                <div className="about-text">
                  <h4>Optional Add-ons</h4>
                  <ul>
                    <li>
                      {/* <i className="fa-solid fa-circle-check"></i> */}
                      Cycling tour around Vattavada to explore nearby villages
                    </li>
                    <li>
                      {/* <i className="fa-solid fa-circle-check"></i> */}
                      Delightful Barbecue Experience
                    </li>
                    <li>
                      {/* <i className="fa-solid fa-circle-check"></i> */}
                      Jeep safari to remote viewpoints and waterfalls
                    </li>
                    <li>
                      {/* <i className="fa-solid fa-circle-check"></i> */}
                      Evening bonfire with local music and storytelling (Rs.500/- per person)
                    </li>
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

export default HavenEscape;
