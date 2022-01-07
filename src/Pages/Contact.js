import React from 'react';
import ButtonBlank from '../Component/ButtonBlank';
import HeadingDownLine from '../Component/HeadingDownLine';
import InputField from '../Component/InputField';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
  };
  return (
    <div className="bg-contact-area bg-gray-800 bg-blend-overlay bg-fixed  bg-cover bg-center md:h-screen pt-20">
      <div className="container mx-auto py-4">
        <HeadingDownLine text="Get in Touch" textcolor="text-white" />
        <form onSubmit={sendEmail} className="md:w-4/5 w-full  mx-auto mt-10">
          <div className="md:flex md:space-x-8 justify-between ">
            <div className="w-full">
              <InputField type=" text" placeholder="Name *" name="user_name" />
            </div>
            <div className="w-full">
              <InputField
                type="email"
                placeholder="Email *"
                name="user_email"
              />
            </div>
          </div>
          <div className="w-full ">
            <InputField type="text" placeholder="Subject *" name="subject" />
          </div>
          <div className="flex flex-wrap  mb-6">
            <textarea
              rows="6"
              cols="50"
              className="w-full px-4 py-2 bg-transparent border-1 border-gray-800 focus:outline-none text-white"
              placeholder="Message *"
              name="message"
            ></textarea>
          </div>
          <ButtonBlank
            text="Send"
            type="submit"
            value="Send"
            textColor="hover:text-white "
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
