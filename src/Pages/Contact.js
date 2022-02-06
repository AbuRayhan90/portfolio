import React, { useState, useEffect } from 'react';
import HeadingDownLine from '../Component/HeadingDownLine';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const inititalValues = {
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  };

  const [formValues, setFormValues] = useState(inititalValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3036xns',
        'template_gyyaccy',
        e.target,
        'user_HVlBW64ZpnOKg8bfR71ip'
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setError(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.user_name) {
      errors.name = 'Name is required !';
    }
    if (!values.user_email) {
      errors.email = 'Email is required !';
    }
    if (!values.subject) {
      errors.subject = 'Subject is required !';
    }
    if (!values.message) {
      errors.message = 'Message is required !';
    }
    return errors;
  };

  useEffect(() => {
    console.log(error);
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });
  return (
    <div className="bg-contact-area bg-gray-900 bg-blend-overlay bg-fixed  bg-cover bg-center py-6 md:h-auto pt-20">
      <div className="container mx-auto ">
        <HeadingDownLine text="Get in Touch" textcolor="text-white" />
        <div className="text-center mt-4 text-green-500 text-2xl">
          {Object.keys(error).length === 0 && isSubmit ? (
            <h1>Successfully send your message! 📧</h1>
          ) : (
            <h1></h1>
          )}
        </div>
        <form onSubmit={sendEmail} className="md:w-4/5 w-full  mx-auto mt-10">
          <div className="md:flex md:space-x-8 justify-between ">
            <div className="w-full">
              <label htmlFor="name" className="text-gray-400 mb-2">
                Name
              </label>
              <input
                className=" text-white py-3 px-4 w-full leading-tight focus:outline-none bg-transparent border-1 border-gray-800"
                id="grid-first-name"
                type="name"
                placeholder="Your name"
                name="user_name"
                value={formValues.user_name}
                onChange={handleChange}
              />
              <p className="text-yellow-500 ">{error.name}</p>
            </div>
            <div className="w-full">
              <label htmlFor="name" className="text-gray-400 mb-2">
                Email
              </label>
              <input
                className=" w-full text-white py-3 px-4  leading-tight focus:outline-none bg-transparent border-1 border-gray-800"
                id="grid-first-name"
                type="email"
                placeholder="Your Email"
                name="user_email"
                value={formValues.user_email}
                onChange={handleChange}
              />
              <p className="text-yellow-500 ">{error.email}</p>
            </div>
          </div>
          <div className="w-full ">
            <label htmlFor="name" className="text-gray-400 my-2">
              Subject
            </label>
            <input
              className=" w-full text-white py-3 px-4 mb-1 leading-tight focus:outline-none bg-transparent border-1 border-gray-800"
              id="grid-first-name"
              type="text"
              placeholder="Subject"
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
            />
            <p className="text-yellow-500">{error.subject}</p>
          </div>
          <div className="flex flex-wrap  mb-6">
            <label htmlFor="name" className="text-gray-400 my-2">
              Message
            </label>
            <textarea
              rows="6"
              cols="50"
              className="w-full px-4 py-2 mb-1 bg-transparent border-1 border-gray-800 focus:outline-none text-white"
              placeholder="Write Your Message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            ></textarea>
            <p className="text-yellow-500">{error.message}</p>
          </div>
          <button
            className={
              Object.keys(error).length === 0 && isSubmit
                ? 'bg-green-500 w-full text-white rounded  md:w-36 t  px-6 py-2 mb-3 '
                : 'bg-yellow-600 w-full text-white rounded md:w-36 transition-alll duration-200 px-6 py-2 mb-3 '
            }
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
