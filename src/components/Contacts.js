import React,{ useRef,useState } from "react";
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const form = useRef();
  const serviceid = "service_ID";
  const templateid = "template_ID";
  const public_key = "yVSyzpKiMduraSBwc";
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (data) => {
    const { name, phone, email, subject, description } = data;

    const templateParams = {
      from_name: name,
      from_phone: phone,
      from_email: email,
      subject: subject,
      message: description,
    };

    emailjs
      .send(serviceid, templateid, templateParams, public_key)
      .then((result) => {
        console.log(result.text);
        setEmailSent(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const onSubmit = (data) => {
    console.log(data);
    sendEmail(data);
    reset();
  };
  return (
    <div id="contacts" className="contacts">
        <div className="text-center">
        <h1>contact me</h1>
        <p>please fill out the form and describe your project needs i'll contact you as soon as possible.</p>
        <span>{emailSent}</span>
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
                    {...register('name', { required: true })}
                    />
                    <div className="line"></div>
                    {errors.name && <span>This field is required</span>}
                    </div>
                    
                    {/* -PHONE INPUT  */}
                    <div className="text-center">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="phone name"
                    name="phone"
                    {...register('phone', { required: true })} 
                    />
                     
                    <div className="line"></div>
                    {errors.name && <span>This field is required</span>}
                    </div>
                    
                     {/* -EMAIL INPUT  */}
                     <div className="text-center">
                     <input          
                     type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <div className="line"></div>
                    {errors.email && errors.email.type === 'required' && <span>This field is required</span>}
        {errors.email && errors.email.type === 'pattern' && <span>Please enter a valid email address</span>}
                    </div>
                    {/* -Subject INPUT  */}
                    <div className="text-center">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    {...register('subject', { required: true })} 
                    />
                    <div className="line"></div>
                    {errors.name && <span>This field is required</span>}
                    </div>
                    
                </div>
                <div className="col-md-6 col-xs-12">
                     {/* -DESCRAPTION  */}
                     <div className="text-center">
                     <textarea
                     type="text"
                    className="form-control"
                    placeholder="please describe shortly your project....."
                    name="description"
                    {...register('description', { required: true })} 
                    ></textarea>
                    <div className="line"></div>
                    {errors.name && <span>This field is required</span>}
                    </div>
                    
                    <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                </div>
            </div>
            </form> 
        </div>
    </div>
  )
}

export default Contacts;
