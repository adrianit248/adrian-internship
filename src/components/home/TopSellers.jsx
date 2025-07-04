import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const TopSellers = () => {
  // intitialize topSellersList array
  const [topSellersList, setTopSellersList] = useState([]);

  //initialize load state
  const [loading, setLoading] = useState(false);

  // define function getNewItemList
  const getTopSellersList = async () => {
    setLoading(true);
    const url =
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers";
    const response = await axios.get(url);
    const responseArray = response.data;
    setTopSellersList(responseArray);

    // mock loading state for 1 second
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // on mount, use axios to fetch the array data and assign it to the newItemList array
  useEffect(() => {
    getTopSellersList();
  }, []);

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2
                data-aos="fade-in-up"
                data-aos-easing="ease-in-back"
                data-aos-duration="350"
              >
                Top Sellers
              </h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div
            data-aos="fade-in-up"
            data-aos-easing="ease-in-back"
            data-aos-duration="350"
          >
            <div className="col-md-12">
              <ol className="author_list">
                {loading ? (
                  <>
                    <li>
                      <div className="author_list_pp">
                        <Link to="/">
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
                      <div className="author_list_info">
                        <Link to="/">
                          <div
                            className="skeleton-box"
                            style={{ width: "100px", height: "20px" }}
                          ></div>
                        </Link>
                        <span>
                          <div
                            className="skeleton-box"
                            style={{ width: "40px", height: "20px" }}
                          ></div>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="author_list_pp">
                        <Link to="/">
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
                      <div className="author_list_info">
                        <Link to="/">
                          <div
                            className="skeleton-box"
                            style={{ width: "100px", height: "20px" }}
                          ></div>
                        </Link>
                        <span>
                          <div
                            className="skeleton-box"
                            style={{ width: "40px", height: "20px" }}
                          ></div>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="author_list_pp">
                        <Link to="/">
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
                      <div className="author_list_info">
                        <Link to="/">
                          <div
                            className="skeleton-box"
                            style={{ width: "100px", height: "20px" }}
                          ></div>
                        </Link>
                        <span>
                          <div
                            className="skeleton-box"
                            style={{ width: "40px", height: "20px" }}
                          ></div>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="author_list_pp">
                        <Link to="/">
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
                      <div className="author_list_info">
                        <Link to="/">
                          <div
                            className="skeleton-box"
                            style={{ width: "100px", height: "20px" }}
                          ></div>
                        </Link>
                        <span>
                          <div
                            className="skeleton-box"
                            style={{ width: "40px", height: "20px" }}
                          ></div>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="author_list_pp">
                        <Link to="/">
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
                      <div className="author_list_info">
                        <Link to="/">
                          <div
                            className="skeleton-box"
                            style={{ width: "100px", height: "20px" }}
                          ></div>
                        </Link>
                        <span>
                          <div
                            className="skeleton-box"
                            style={{ width: "40px", height: "20px" }}
                          ></div>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="author_list_pp">
                        <Link to="/">
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
                      <div className="author_list_info">
                        <Link to="/">
                          <div
                            className="skeleton-box"
                            style={{ width: "100px", height: "20px" }}
                          ></div>
                        </Link>
                        <span>
                          <div
                            className="skeleton-box"
                            style={{ width: "40px", height: "20px" }}
                          ></div>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="author_list_pp">
                        <Link to="/">
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
                      <div className="author_list_info">
                        <Link to="/">
                          <div
                            className="skeleton-box"
                            style={{ width: "100px", height: "20px" }}
                          ></div>
                        </Link>
                        <span>
                          <div
                            className="skeleton-box"
                            style={{ width: "40px", height: "20px" }}
                          ></div>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="author_list_pp">
                        <Link to="/">
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
                      <div className="author_list_info">
                        <Link to="/">
                          <div
                            className="skeleton-box"
                            style={{ width: "100px", height: "20px" }}
                          ></div>
                        </Link>
                        <span>
                          <div
                            className="skeleton-box"
                            style={{ width: "40px", height: "20px" }}
                          ></div>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="author_list_pp">
                        <Link to="/">
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
                      <div className="author_list_info">
                        <Link to="/">
                          <div
                            className="skeleton-box"
                            style={{ width: "100px", height: "20px" }}
                          ></div>
                        </Link>
                        <span>
                          <div
                            className="skeleton-box"
                            style={{ width: "40px", height: "20px" }}
                          ></div>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="author_list_pp">
                        <Link to="/">
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
                      <div className="author_list_info">
                        <Link to="/">
                          <div
                            className="skeleton-box"
                            style={{ width: "100px", height: "20px" }}
                          ></div>
                        </Link>
                        <span>
                          <div
                            className="skeleton-box"
                            style={{ width: "40px", height: "20px" }}
                          ></div>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="author_list_pp">
                        <Link to="/">
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
                      <div className="author_list_info">
                        <Link to="/">
                          <div
                            className="skeleton-box"
                            style={{ width: "100px", height: "20px" }}
                          ></div>
                        </Link>
                        <span>
                          <div
                            className="skeleton-box"
                            style={{ width: "40px", height: "20px" }}
                          ></div>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="author_list_pp">
                        <Link to="/">
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
                      <div className="author_list_info">
                        <Link to="/">
                          <div
                            className="skeleton-box"
                            style={{ width: "100px", height: "20px" }}
                          ></div>
                        </Link>
                        <span>
                          <div
                            className="skeleton-box"
                            style={{ width: "40px", height: "20px" }}
                          ></div>
                        </span>
                      </div>
                    </li>
                  </>
                ) : (
                  topSellersList.map((elem, index) => (
                    <li key={index}>
                      <div className="author_list_pp">
                        <Link to={`/author/${elem.authorId}`}>
                          <img
                            className="lazy pp-author"
                            src={elem.authorImage}
                            alt=""
                          />
                          <i className="fa fa-check"></i>
                        </Link>
                      </div>
                      <div className="author_list_info">
                        <Link to={`/author/${elem.authorId}`}>
                          {elem.authorName}
                        </Link>
                        <span>{elem.price} ETH</span>
                      </div>
                    </li>
                  ))
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
