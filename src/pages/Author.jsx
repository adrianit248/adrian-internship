import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useLocation, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import axios from "axios";

// `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${elem.authorId}`

const Author = () => {
  const { authorId } = useParams();
  //initialize load state
  const [loading, setLoading] = useState(false);
  const [thisUser, setThisUser] = useState({});

  // define function getHotCol
  const getThisUser = async () => {
    setLoading(true);
    const url = `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`;
    const response = await axios.get(url);
    const responseArray = response.data;
    setThisUser(responseArray);

    // mock loading state for 1 second
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(authorId);
    getThisUser();
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{
            background: `url(${AuthorBanner}) top`,
            backgroundSize: "cover",
          }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              {loading ? (
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <div
                          className="skeleton-box"
                          style={{width: "150px", height: "150px", borderRadius: "50%"}}
                        ></div>
                        <i className="fa fa-check"></i>
                        <div className="profile_name">
                          <h4>
                            <div
                              className="skeleton-box"
                              style={{width: "200px"}}
                            ></div>
                            <span className="profile_username">
                              <div
                                className="skeleton-box"
                                style={{width: "100px"}}
                              ></div>
                            </span>
                            <span id="wallet" className="profile_wallet">
                              <div
                                className="skeleton-box"
                                style={{width: "250px"}}
                              ></div>
                            </span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <div className="profile_follower">
                          <div
                            className="skeleton-box"
                            style={{width: "150px", height: "40px"}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <img src={thisUser.authorImage} alt="" />

                        <i className="fa fa-check"></i>
                        <div className="profile_name">
                          <h4>
                            {thisUser.authorName}
                            <span className="profile_username">
                              @{thisUser.tag}
                            </span>
                            <span id="wallet" className="profile_wallet">
                              {thisUser.address}
                            </span>
                            <button id="btn_copy" title="Copy Text">
                              Copy
                            </button>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <div className="profile_follower">
                          {thisUser.followers} followers
                        </div>
                        <Link to="#" className="btn-main">
                          Follow
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems thisUser={thisUser} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;

// const Author = () => {
//   const [loading, setLoading] = useState(true);

//   const { id } = useParams();
//   const { elem } = useLocation().state;
//   const idVal = id;

//   const loadState = async () => {
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     loadState();
//   }, []);

//   return (
//     <div id="wrapper">
//       <div className="no-bottom no-top" id="content">
//         <div id="top"></div>
//         {loading
//         ? <>
//             <section
//               id="profile_banner"
//               aria-label="section"
//               className="text-light"
//               data-bgimage="url(images/author_banner.jpg) top"
//               style={{ background: `url(${AuthorBanner}) top` }}
//             ></section>

//             <section aria-label="section">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-12">
//                     <div className="d_profile de-flex">
//                       <div className="de-flex-col">
//                         <div className="profile_avatar">
//                           <div
//                             className="skeleton-box"
//                             style={{width: "150px", height: "150px", borderRadius: "50%"}}
//                           ></div>
//                           <i className="fa fa-check"></i>
//                           <div className="profile_name">
//                             <h4>
//                               <div
//                                 className="skeleton-box"
//                                 style={{width: "200px"}}
//                               ></div>
//                               <span className="profile_username">
//                                 <div
//                                   className="skeleton-box"
//                                   style={{width: "100px"}}
//                                 ></div>
//                               </span>
//                               <span id="wallet" className="profile_wallet">
//                                 <div
//                                   className="skeleton-box"
//                                   style={{width: "250px"}}
//                                 ></div>
//                               </span>
//                             </h4>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="profile_follow de-flex">
//                         <div className="de-flex-col">
//                           <div className="profile_follower">
//                             <div
//                               className="skeleton-box"
//                               style={{width: "150px", height: "40px"}}
//                             ></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="de_tab tab_simple">
//                       <div className="de_tab_content">
//                         <div className="tab-1">
//                           <div className="row">
//                             <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
//                               <div
//                                 className="skeleton-box"
//                                 style={{width: "100%", height: "400px"}}
//                               ></div>
//                             </div>
//                             <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
//                               <div
//                                 className="skeleton-box"
//                                 style={{width: "100%", height: "400px"}}
//                               ></div>
//                             </div>
//                             <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
//                               <div
//                                 className="skeleton-box"
//                                 style={{width: "100%", height: "400px"}}
//                               ></div>
//                             </div>
//                             <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
//                               <div
//                                 className="skeleton-box"
//                                 style={{width: "100%", height: "400px"}}
//                               ></div>
//                             </div>
//                             <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
//                               <div
//                                 className="skeleton-box"
//                                 style={{width: "100%", height: "400px"}}
//                               ></div>
//                             </div>
//                             <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
//                               <div
//                                 className="skeleton-box"
//                                 style={{width: "100%", height: "400px"}}
//                               ></div>
//                             </div>
//                             <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
//                               <div
//                                 className="skeleton-box"
//                                 style={{width: "100%", height: "400px"}}
//                               ></div>
//                             </div>
//                             <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
//                               <div
//                                 className="skeleton-box"
//                                 style={{width: "100%", height: "400px"}}
//                               ></div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </>
//          : <>
//               <section
//                 id="profile_banner"
//                 aria-label="section"
//                 className="text-light"
//                 data-bgimage="url(images/author_banner.jpg) top"
//                 style={{ background: `url(${AuthorBanner}) top` }}
//               ></section>

//               <section aria-label="section">
//                 <div className="container">
//                   <div className="row">
//                     <div className="col-md-12">
//                       <div className="d_profile de-flex">
//                         <div className="de-flex-col">
//                           <div className="profile_avatar">
//                             <img src={elem.authorImage} alt="" />

//                             <i className="fa fa-check"></i>
//                             <div className="profile_name">
//                               <h4>
//                                 {elem.authorName || 'Derek Jeter'}
//                                 <span className="profile_username">
//                                   @monicaaaa
//                                 </span>
//                                 <span id="wallet" className="profile_wallet">
//                                   UDHUHWudhwd78wdt7edb32uidbwyuidhg7wUHIFUHWewiqdj87dy7
//                                 </span>
//                                 <button id="btn_copy" title="Copy Text">
//                                   Copy
//                                 </button>
//                               </h4>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="profile_follow de-flex">
//                           <div className="de-flex-col">
//                             <div className="profile_follower">573 followers</div>
//                             <Link to="#" className="btn-main">
//                               Follow
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="col-md-12">
//                       <div className="de_tab tab_simple">
//                         <AuthorItems />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </>
//           }
//       </div>
//     </div>
//   );
// };

// export default Author;
