import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PomodoroTimer from "../PomodoroTimer";
import AOS from "aos";
import "aos/dist/aos.css";

const NewItems = () => {
  // intitialize newItemList array
  const [newItemList, setNewItemList] = useState([]);

  //initialize load state
  const [loading, setLoading] = useState(false);

  // define function getNewItemList
  const getNewItemList = async () => {
    setLoading(true);
    const url =
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems";
    const response = await axios.get(url);
    const responseArray = response.data;
    setNewItemList(responseArray);

    // mock loading state for 1 second
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // on mount, use axios to fetch the array data and assign it to the newItemList array
  useEffect(() => {
    getNewItemList();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    mobilefirst: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-duration="350"
              >
                New Items
              </h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          <div
            data-aos="fade-in-up"
            data-aos-easing="ease-in-back"
            data-aos-duration="450"
          >
            <Slider {...settings}>
              {loading
                ? new Array(4).fill(0).map((_, index) => (
                    <div
                      className=""
                      key={index}
                      data-aos="fade-in-up"
                      data-aos-easing="ease-in-back"
                      data-aos-duration="350"
                    >
                      <div className="nft__item">
                        <div className="author_list_pp">
                          <Link
                            to="/"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Creator: Monica Lucas"
                          >
                            <div
                              className="skeleton-box"
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                              }}
                            ></div>
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="nft__item_wrap">
                          <div className="nft__item_extra">
                            <div className="nft__item_buttons">
                              <button>Buy Now</button>
                              <div className="nft__item_share">
                                <h4>Share</h4>
                                <Link
                                  to="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="fa fa-facebook fa-lg"></i>
                                </Link>
                                <Link
                                  to="https://twitter.com/intent/tweet?url=https://gigaland.io"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <i className="fa fa-twitter fa-lg"></i>
                                </Link>
                                <Link to="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                                  <i className="fa fa-envelope fa-lg"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <Link to="/">
                            <div
                              className="skeleton-box"
                              style={{ width: "100%", height: "350px" }}
                            ></div>
                          </Link>
                        </div>
                        <div
                          className="nft__item_info"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Link to="/">
                            <div
                              className="skeleton-box"
                              style={{ width: "180px", height: "30px" }}
                            ></div>
                          </Link>
                          <div
                            className="skeleton-box"
                            style={{ width: "100px", height: "20px" }}
                          ></div>
                        </div>
                        <div className="nft__item_like">
                          <div
                            className="skeleton-box"
                            style={{ width: "30px", height: "15px" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))
                : newItemList.map((elem) => (
                    <div className="" key={elem.id}>
                      <div className="nft__item">
                        <div className="author_list_pp">
                          <Link
                            to={`/author/${elem.authorId}`}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Creator: Monica Lucas"
                          >
                            <img
                              className="lazy"
                              src={elem.authorImage}
                              alt=""
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <PomodoroTimer unixTimestamp={elem.expiryDate} />

                        <div className="nft__item_wrap">
                          <div className="nft__item_extra">
                            <div className="nft__item_buttons">
                              <button>Buy Now</button>
                              <div className="nft__item_share">
                                <h4>Share</h4>
                                <a href="" target="_blank" rel="noreferrer">
                                  <i className="fa fa-facebook fa-lg"></i>
                                </a>
                                <a href="" target="_blank" rel="noreferrer">
                                  <i className="fa fa-twitter fa-lg"></i>
                                </a>
                                <a href="">
                                  <i className="fa fa-envelope fa-lg"></i>
                                </a>
                              </div>
                            </div>
                          </div>

                          <Link to={`/item-details/${elem.nftId}`}>
                            <img
                              src={elem.nftImage}
                              className="lazy nft__item_preview"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="nft__item_info">
                          <Link to={`/item-details/${elem.nftId}`}>
                            <h4>{elem.title}</h4>
                          </Link>
                          <div className="nft__item_price">
                            {elem.price} ETH
                          </div>
                          <div className="nft__item_like">
                            <i className="fa fa-heart"></i>
                            <span>{elem.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
