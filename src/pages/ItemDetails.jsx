import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useLocation, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ItemDetails = () => {
  const {id} = useParams()

  //initialize load state
  const [loading, setLoading] = useState(false);
  const [thisItem, setThisItem] = useState({});

  // define function getThisItem
  const getThisItem = async () => {
    setLoading(true);
    const url = `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${id}`;
    const response = await axios.get(url);
    const responseArray = response.data;
    setThisItem(responseArray);

    // mock loading state for 1 second
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(id);
    getThisItem();
  }, []);

  const loadState = async () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }


  useEffect(() => {
    window.scrollTo(0, 0);
    loadState()
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">


            {loading
            ? <div className="row">
                <div className="col-md-6 text-center">
                  <div className="skeleton-box" style={{width: "100%", height: "100%"}}></div>
                </div>
                <div className="col-md-6">
                  <div className="item_info">
                    <div className="skeleton-box" style={{width: "300px", height: "40px"}}></div>
                    <div className="item_info_counts">
                      <div className="skeleton-box" style={{width: "80px", height: "30px"}}></div>
                      <div className="skeleton-box" style={{width: "80px", height: "30px"}}></div>
                    </div>
                    <div className="skeleton-box" style={{width: "100%", height: "80px"}}></div>
                    <div className="d-flex flex-row">
                      <div className="mr40">
                        <h6>Owner</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <div className="skeleton-box" style={{width: "50px", height: "50px", borderRadius: "50%"}}></div>
                          </div>
                          <div className="author_list_info">
                            <div className="skeleton-box" style={{width: "125px", height: "20px"}}></div>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="de_tab tab_simple">
                      <div className="de_tab_content">
                        <h6>Creator</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <div className="skeleton-box" style={{width: "50px", height: "50px", borderRadius: "50%"}}></div>
                          </div>
                          <div className="author_list_info">
                            <div className="skeleton-box" style={{width: "125px", height: "20px"}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="spacer-40"></div>
                      <h6>Price</h6>
                      <div className="nft-item-price">
                        <div className="skeleton-box" style={{width: "75px", height: "20px"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            : 
            <div className="row">
                <div className="col-md-6 text-center">
                  <img
                    src={thisItem.nftImage}
                    className="img-fluid img-rounded mb-sm-30 nft-image"
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <div className="item_info">
                    <h2>{thisItem.title} #{thisItem.tag}</h2>

                    <div className="item_info_counts">
                      <div className="item_info_views">
                        <i className="fa fa-eye"></i>
                        {thisItem.views}
                      </div>
                      <div className="item_info_like">
                        <i className="fa fa-heart"></i>
                        {thisItem.likes}
                      </div>
                    </div>
                    <p>
                      {thisItem.description}
                    </p>
                    <div className="d-flex flex-row">
                      <div className="mr40">
                        <h6>Owner</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <Link to={`/author/${thisItem.ownerId}`}>
                              <img className="lazy" src={thisItem.ownerImage} alt="" />
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                          <div className="author_list_info">
                            <Link 
                              to={`/author/${thisItem.ownerId}`}>{thisItem.ownerName}</Link>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <div className="de_tab tab_simple">
                      <div className="de_tab_content">
                        <h6>Creator</h6>
                        <div className="item_author">
                          <div className="author_list_pp">
                            <Link to={`/author/${thisItem.creatorId}`}>
                              <img className="lazy" src={thisItem.creatorImage} alt="" />
                              <i className="fa fa-check"></i>
                            </Link>
                          </div>
                          <div className="author_list_info">
                            <Link to={`/author/${thisItem.creatorId}`}>{thisItem.creatorName}</Link>
                          </div>
                        </div>
                      </div>
                      <div className="spacer-40"></div>
                      <h6>Price</h6>
                      <div className="nft-item-price">
                        <img src={EthImage} alt="" />
                        <span>{thisItem.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }



            
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
