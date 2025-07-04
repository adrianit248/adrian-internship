import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";

const AuthorItems = (thisUser) => {
  //initialize load state
  const [loading, setLoading] = useState(false);
  const user = thisUser.thisUser;

  const loadState = () => {
    setLoading(true);
    // mock loading state for 1 second
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    loadState();
    console.log(user);
  }, []);

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">

          {loading ? (
            <div className="col-md-12">
              <div className="de_tab tab_simple">
                <div className="de_tab_content">
                  <div className="tab-1">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div
                          className="skeleton-box"
                          style={{width: "100%", height: "400px"}}
                        ></div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div
                          className="skeleton-box"
                          style={{width: "100%", height: "400px"}}
                        ></div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div
                          className="skeleton-box"
                          style={{width: "100%", height: "400px"}}
                        ></div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div
                          className="skeleton-box"
                          style={{width: "100%", height: "400px"}}
                        ></div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div
                          className="skeleton-box"
                          style={{width: "100%", height: "400px"}}
                        ></div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div
                          className="skeleton-box"
                          style={{width: "100%", height: "400px"}}
                        ></div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div
                          className="skeleton-box"
                          style={{width: "100%", height: "400px"}}
                        ></div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div
                          className="skeleton-box"
                          style={{width: "100%", height: "400px"}}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (user.nftCollection && user.nftCollection.length) > 0 ? (
            user.nftCollection.map((elem, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Link to="">
                      <img className="lazy" src={user.authorImage} alt="" />
                      <i className="fa fa-check"></i>
                    </Link>
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
            ))
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
