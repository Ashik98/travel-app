import React from "react";
import Link from "next/link";
import Image from "next/image"; 

const ourWorksData = [
  {
    image: "/images/vat1.jpg",
    title: "Earthen Escape",
    category: "Vattavada",
    viewDetails: "/earthernescape/",
    aosDelay: "100",
    sentences: [
      "Experience the rustic charm of Vattavada.",
      "Reconnect with nature in our Earthen Escape.",
      "A serene getaway from the hustle and bustle."
    ],
  },
  {
    image: "/images/vat2.jpg",
    title: "Haven Escape",
    category: "Vattavada",
    viewDetails: "/havenEscape/",
    aosDelay: "200",
    sentences: [
      "Find your haven in the heart of nature.",
      "Escape to tranquility with Haven Escape.",
      "Your perfect retreat in Vattavada."
    ],
  },
  {
    image: "/images/vat3.jpg",
    title: "Valley Escape",
    category: "The scenic and serene nature of Vattavada",
    viewDetails: "/havenEscape/",
    aosDelay: "300",
    sentences: [
      "Discover the beauty of the valley.",
      "A peaceful escape awaits you.",
      "Valley Escape offers stunning views."
    ],
  },
  {
    image: "/images/works/work4.jpg",
    title: "Stuck with to-do list, I created a new app for myself",
    category: "Email Marketing",
    viewDetails: "/portfolio/portfolio-details/",
    aosDelay: "400",
    sentences: [
      "Streamline your tasks with our app.",
      "Productivity redefined.",
      "Stay on top of your to-do list."
    ],
  },
];

const OurWorks = () => {
  return (
    <>
      <section className="case-studies-area lg-portfolio ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Our Packages</h2>
            <p>
            Our mission is to offer a comfortable stay that feels like a home away from home. We encourage you to share your stories with us, 
            as together we can create new memories for you to cherish and share with others upon your return. 
            Let us help you leave behind any unwanted moments by exploring the beauty and tranquility of this paradise
            </p>
          </div>

          <div className="row justify-content-center">
            {ourWorksData &&
              ourWorksData.map((value, i) => (
                <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6" key={i}>
                  <div
                    className="work-card"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image src={value.image} alt="image" width={510} height={700} />

                    <div className="content text-center">
                      <span>
                        <Link href={value.viewDetails}>{value.category}</Link>
                      </span>

                      <h3>
                        <Link href={value.viewDetails}>{value.title}</Link>
                      </h3>

                      <Link href={value.viewDetails} className="custom-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
 
          {/* Pagination */}
          {/* <div className="pagination-area">
            <a className="prev page-numbers">
              <i className="fa-solid fa-angles-left"></i>
            </a>

            <a className="page-numbers">1</a>

            <span className="page-numbers current">2</span>

            <a className="page-numbers">3</a>

            <a className="page-numbers">4</a>

            <a className="next page-numbers">
              <i className="fa-solid fa-angles-right"></i>
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
};
export default OurWorks;
