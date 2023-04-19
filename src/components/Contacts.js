import React,{ useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";



const Contacts = () => {
  const [successMessage,setSuccessMessage] = useState("");
    const {register, handleSubmit,formState: { errors }} = useForm();  
    const form = useRef();
        const serviceid = "service_ID";
        const templateid = "template_ID";
        const public_key = "yVSyzpKiMduraSBwc";
        const onSubmit = (data, r) =>{
            sendEmail(
              serviceid,
              templateid,
              {
                name:data.name,
                phone:data.phone,
                email:data.email,
                subject:data.subject,
                description: data.description
              },
              public_key
              )
              r.target.reset();
        }
        const sendEmail = (serviceid, templateid, variables, public_key) => {
        emailjs.send(serviceid, templateid, variables, public_key)
          .then(() => {
            setSuccessMessage("form sent successfully! I'll contact you as soon as possibule.");
          }).catch(err => console.error(`something went wrong ${err}`));
      };
  return (
    <div className="contacts">
        <div className="text-center">
        <h1>contact me</h1>
        <p>please fill out the form and describe your project needs i'll contact you as soon as possible.</p>
        <span className="success-message">{successMessage}</span>
        </div>
        <div className="container">
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    {/* -INPUT NAME */}
                    <div className="text-center">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="name"
                    name="name"
                    ref = {
                      register({
                        required:"please enter your name",
                        maxLength:{
                          value:20,
                          message:"please enter a name with fewer then 20 characters"
                        }
                      })
                    }
                    />
                    <div className="line"></div>
                    </div>
                    <span className="error-message">
                      {errors.name && errors.name.message}</span>
                    {/* -PHONE INPUT  */}
                    <div className="text-center">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="phone name"
                    name="phone"
                    ref = {
                      register({
                        required:"please add your phone number"
                      })
                    }
                    />
                    <div className="line"></div>
                    </div>
                    <span className="error-message">
                      {errors.phone && errors.phone.message}</span>
                     {/* -EMAIL INPUT  */}
                     <div className="text-center">
                     <input          
                     type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    ref = {
                      register({
                        required:"please provide your email",
                        pattern:{
                          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                          message:"invalid Email"
                        }
                      })
                    }
                    />
                    <div className="line"></div>
                    </div>
                    {/* -Subject INPUT  */}
                    <div className="text-center">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    ref = {
                      register({
                        required:"OOPS! your forget to the subject! "
                      })
                    }
                    />
                    <div className="line"></div>
                    </div>
                    <span className="error-message">
                      {errors.subject && errors.subject.message}</span>
                </div>
                <div className="col-md-6 col-xs-12">
                     {/* -DESCRAPTION  */}
                     <div className="text-center">
                     <textarea
                     type="text"
                    className="form-control"
                    placeholder="please describe shortly you project....."
                    name="description"
                    ref = {
                      register({
                        required:"plaese describe shortly your project needs... "
                      })
                    }
                    ></textarea>
                    <div className="line"></div>
                    </div>
                    <span className="error-message">
                      {errors.description && errors.description.message}</span>
                    <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                </div>
            </div>
            </form> 
        </div>
    </div>
  )
}

export default Contacts;
