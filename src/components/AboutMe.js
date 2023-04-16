import React from "react";
import author from "../Aswini_pic.jpg";
const AboutMe = () => {
  return (
    <div className="container py-5">
        <div className="row">
    <div className="col-lg-6 col-xm-12">
        <div className="photo-wrap mb-5">
        <img className="profile-img" src={author} alt="author..."/>
        </div>
    </div>
    <div className="col-lg-6 col-xm-12">
        <h1 className="about-heading">About me</h1>
        <p>My name is Aswini Sureddy and I describe myself as someone who's persistant, a quick learner, and loves problem solving by using simple and scalable solutions. In my free time I enjoy travelling to different places, solving sudoku, and baking.

I'm an enthusiastic Web Developer with a passion for making beautiful, responsive websites and web applications.I love programming and love to learn something new.

I will love to hear from you. Whether it's a project, job opportunity, or just a chat. Feel free to contact me.</p>
    </div>
        </div>
    </div>
  )
}

export default AboutMe;
