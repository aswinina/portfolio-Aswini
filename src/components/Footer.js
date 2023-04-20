import React from "react";
import { 
FacebookShareButton,
FacebookIcon,
TwitterShareButton,
TwitterIcon,
RedditShareButton,
RedditIcon,
LinkedinShareButton,
LinkedinIcon } from "react-share";

function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="d-flex">
                        <p>City Moscow Main st 2020 office #223</p>
                    </div>
                    <div className="d-flex">
                        <a href="tel:555-555-555">+4571504794</a>
                    </div>
                    <div className="d-flex">
                        <p>aswini.sureddy@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="row">
                    <div className="col">
                        <a className="footer-nav">Home</a>
                        <br />
                        <a className="footer-nav">About me</a>
                        <br />
                        <a className="footer-nav">Services</a>
                    </div>
                    <div className="col">
                    <a className="footer-nav">Experience</a>
                    <br />
                        <a className="footer-nav">Portfolio</a>
                        <br />
                        <a className="footer-nav">Contacts</a>
                    </div>
                </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                    <div className="d-flex justify-content-center">
                        <FacebookShareButton
                        url={"https://www.linkedin.com/in/aswini-sureddy/"}
                        quote={"FullStack Developer"}
                        hashtag="#javascript">
                            <FacebookIcon className="mx-3" size={36}/>
                        </FacebookShareButton>
                        <TwitterShareButton
                        url={"https://www.linkedin.com/in/aswini-sureddy/"}
                        quote={"FullStack Developer"}
                        hashtag="#javascript">
                            <TwitterIcon className="mx-3" size={36}/>
                        </TwitterShareButton>
                        <RedditShareButton
                        url={"https://www.linkedin.com/in/aswini-sureddy/"}
                        quote={"FullStack Developer"}
                        hashtag="#javascript">
                            <RedditIcon className="mx-3" size={36}/>
                        </RedditShareButton>
                        <LinkedinShareButton
                        url={"https://www.linkedin.com/in/aswini-sureddy/"}
                        quote={"FullStack Developer"}
                        hashtag="#javascript">
                            <LinkedinIcon className="mx-3" size={36}/>
                        </LinkedinShareButton>
                    </div>
                    <p className="pt-3 text-center">
                        copyright&copy;
                        {new Date().getFullYear()}&nbsp;New Horizon All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
