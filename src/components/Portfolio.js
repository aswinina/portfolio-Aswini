import React from "react";
import Weather from "../images/Weather-React.png";
import Office from "../images/Office-store.png";
import Dictionary from "../images/Dictionary-App.png";
import Yoga from "../images/Yoga-Asanas.png";
import Travel from "../images/Travel.png";
// FONTAWESOME IMPORT

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX

import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
    //Weather
    const openPopupboxWeather = () => {
        const content = (
            <>
        <img className="portflio-image-popupbox" src={Weather} alt="Weather App  project"/>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
erat, </p>
<b>Demo:</b><a className="hyper-link" onClick= {() => window.open("https://weather-app-use-react.netlify.app/", "_blank")}>https://weather-app-use-react.netlify.app/</a>
<br />
<b>GitHub:</b><a className="hyper-link" onClick= {() => window.open("https://github.com/aswinina/weather-react")}>https://github.com/aswinina/weather-react</a>
        </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigWeather = {
             titleBar: {
                enable: true,
                text: "Weather App project."
             },
             fadeIn: true,
             fadeInSpeed:500
    }
     //Office
     const openPopupboxOffice = () => {
        const content = (
            <>
        <img className="portflio-image-popupbox" src={Office} alt="Office store  project"/>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
erat, </p>
<b>Demo:</b><a className="hyper-link" onClick= {() => window.open("https://office-store.netlify.app/", "_blank")}>https://office-store.netlify.app/</a>
<br />
<b>GitHub:</b><a className="hyper-link" onClick= {() => window.open("https://github.com/aswinina/office-shoping")}>https://github.com/aswinina/office-shoping</a>
        </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigOffice = {
             titleBar: {
                enable: true,
                text: "Office store project."
             },
             fadeIn: true,
             fadeInSpeed:500
    }
    // Dictionary
    const openPopupboxDictionary = () => {
        const content = (
            <>
        <img className="portflio-image-popupbox" src={Dictionary} alt="Dictionary project"/>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
erat, </p>
<b>Demo:</b><a className="hyper-link" onClick= {() => window.open("https://dictionary-app-project-build.netlify.app/", "_blank")}>https://dictionary-app-project-build.netlify.app/</a>
<br />
<b>GitHub:</b><a className="hyper-link" onClick= {() => window.open("https://github.com/aswinina/dictionary-project")}>https://github.com/aswinina/dictionary-project</a>
        </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigDictionary = {
             titleBar: {
                enable: true,
                text: "Dictionary project."
             },
             fadeIn: true,
             fadeInSpeed:500
    }
    // Yoga Responsive
    const openPopupboxYoga = () => {
        const content = (
            <>
        <img className="portflio-image-popupbox" src={Yoga} alt="Yoga Responsive project"/>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
erat, </p>
<b>Demo:</b><a className="hyper-link" onClick= {() => window.open("https://12-basic-asanas.netlify.app/", "_blank")}>https://12-basic-asanas.netlify.app/</a>
<br />
<b>GitHub:</b><a className="hyper-link" onClick= {() => window.open("https://github.com/aswinina/yoga-project")}>https://github.com/aswinina/yoga-project</a>
        </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigYoga = {
             titleBar: {
                enable: true,
                text: "Yoga Responsive project."
             },
             fadeIn: true,
             fadeInSpeed:500
    }
     // Travel project
     const openPopupboxTravel = () => {
        const content = (
            <>
        <img className="portflio-image-popupbox" src={Travel} alt="Travel project"/>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
erat, </p>
<b>Demo:</b><a className="hyper-link" onClick= {() => window.open("https://trvael-lisbon.netlify.app/", "_blank")}>https://trvael-lisbon.netlify.app/</a>
<br />
<b>GitHub:</b><a className="hyper-link" onClick= {() => window.open("https://github.com/aswinina/responsive-add-on")}>https://github.com/aswinina/responsive-add-on</a>
        </>
        )
        PopupboxManager.open({ content })
    }
    const popupboxConfigTravel = {
             titleBar: {
                enable: true,
                text: "Travel Responsive project."
             },
             fadeIn: true,
             fadeInSpeed:500
    }
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper">
            <div className="portfolio-image-box" onClick={openPopupboxWeather}>
            <img className="portfolio-image" src={Weather} alt="weather-app react project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div> 
        {/*  -  */}
        
        <div className="portfolio-image-box" onClick={openPopupboxDictionary}>
            <img className="portfolio-image" src={Dictionary} alt="dictionary website project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/*  -  */}
        
        <div className="portfolio-image-box" onClick={openPopupboxYoga}>
            <img className="portfolio-image" src={Yoga} alt="yoga responsive project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/*  -  */}
       
        <div className="portfolio-image-box" onClick={openPopupboxTravel}>
            <img className="portfolio-image" src={Travel} alt="yoga responsive project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        </div>
        </div>
        <PopupboxContainer {...popupboxConfigWeather} />
        <PopupboxContainer {...popupboxConfigOffice} />
        <PopupboxContainer {...popupboxConfigDictionary} />
        <PopupboxContainer {...popupboxConfigYoga} />
        <PopupboxContainer {...popupboxConfigTravel} />
        </div>
      
  )
}

export default Portfolio;

