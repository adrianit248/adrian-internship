import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HotCollections = () => {
  // intitialize hotcollections array
  const [hotCol, setHotCol] = useState([])

  //initialize load state
  const [loading, setLoading] = useState(false)

  // define function getHotCol
  const getHotCol = async () => {
    setLoading(true)
    const url = 'https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections'
    const response = await axios.get(url)
    const responseArray = (response.data)
    setHotCol(responseArray)
    
    // mock loading state for 1 second
    setTimeout(() => {
      setLoading(false) 
    }, 1000);

  }

  // on mount, use axios to fetch the array data and assign it to the hotCol array
  useEffect(() => {
    getHotCol()
  }, [])

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
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 580,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  };

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          
          <Slider {...settings}>

            {loading 
            ? new Array(6).fill(0).map((_, index) => 
                <div className="" key={index}>
                  <div className="nft_coll">
                    <div className="nft_wrap">
                      <Link to="/">
                        <div className="skeleton-box" 
                        style={{width: '100%', height: '200px'}}
                        ></div>
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to="/">
                        <div className="skeleton-box" 
                        style={{width: '50px', height: '50px', borderRadius: '50%'}}
                        // style="width: 50px; height: 50px; border-radius: 50%;"
                        ></div>
                      </Link><i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info">
                      <Link to="/">
                        <div className="skeleton-box" 
                        style={{width: '100px', height: '20px'}}
                        // style="width: 100px; height: 20px;"
                        ></div>
                      </Link><br />
                      <div className="skeleton-box" 
                      style={{width: '60px', height: '20px'}}
                      // style="width: 60px; height: 20px;"
                      ></div>
                    </div>
                    
                  </div>
                </div>
              ) 
            : hotCol.map((elem) => 
                <div className="" key={elem.id}>
                  <div className="nft_coll">
                    <div className="nft_wrap" >
                      <Link to={`/item-details/${elem.id}`} state={{elem: elem}}>
                        <img src={elem.nftImage} className="lazy img-fluid" alt="" />
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to={`/author/${elem.authorId}`}>
                        <img className="lazy pp-coll" src={elem.authorImage} alt="" />
                      </Link>
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info">
                      <Link to="/explore">
                        <h4>{elem.title}</h4>
                      </Link>
                      <span>ERC-{elem.code}</span>
                    </div>
                  </div>
                </div>
              )
            }
          </Slider>


          
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
