import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import PomodoroTimer from "../PomodoroTimer";

const ExploreItems = () => {
  // intitialize hotcollections array
  const [explore, setExplore] = useState([]);

  //initialize load state
  const [loading, setLoading] = useState(false);

  //initialize slice value
  const [slicer, setSlicer] = useState(8);

  //initialize dynamic url based on filter value
  const [url, setUrl] = useState("");

  // define function getExplore
  const getExplore = async () => {
    setLoading(true);
    const response = await axios.get(url);
    const responseArray = response.data;

    setExplore(responseArray);

    // mock loading state for 1 second
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // define filterItems
  function filterItems(filter) {
    if (filter === "price_low_to_high") {
      setUrl(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=price_low_to_high"
      );
    }
    if (filter === "price_high_to_low") {
      setUrl(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=price_high_to_low"
      );
    }
    if (filter === "likes_high_to_low") {
      setUrl(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=likes_high_to_low"
      );
    }
  }

  // define updateSlice
  const updateSlice = () => {
    setSlicer(slicer + 4);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Does this work?
    if (url === "") {
      setUrl(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore"
      );
    }
    getExplore();
  }, [url]);

  return (
    <>
      <div>
        <select
          id="filter-items"
          defaultValue={"Sort By:"}
          onChange={(event) => filterItems(event.target.value)}
        >
          <option value="">Sort By:</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {loading
        ? new Array(slicer).fill(0).map((_, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div
                className="skeleton-box"
                style={{ width: "100%", height: "400px" }}
              ></div>
            </div>
          ))
        : explore.slice(0, slicer).map((elem, index) => (
            <div
              key={index}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link
                    to={`/author/${elem.authorId}`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    <img className="lazy" src={elem.authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <div className="de__countdown">
                  <PomodoroTimer unixTimestamp={elem.expiryDate} />
                </div>

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
                  <div className="nft__item_price">{elem.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{elem.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

      <div className="col-md-12 text-center">
        {slicer < explore.length ? (
          <Link
            onClick={updateSlice}
            to=""
            id="loadmore"
            className="btn-main lead"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-duration="350"
          >
            Load more
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default ExploreItems;
