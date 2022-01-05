import React from 'react';
import ButtonBlank from '../Component/ButtonBlank';
import HeadingDownLine from '../Component/HeadingDownLine';
import InputField from '../Component/InputField';

const Contact = () => {
  return (
    <div className="bg-contact-area bg-gray-800 bg-blend-overlay bg-fixed  bg-cover bg-center h-screen">
      <div className="container mx-auto py-4">
        <div className="mx-auto">
          <HeadingDownLine text="Get in Touch" textcolor="text-white" />
          <form class="w-4/5 mx-auto mt-10">
            <div class="flex space-x-8 justify-between ">
              <div className="w-full">
                <InputField type=" text" placeholder="Name *" />
              </div>
              <div className="w-full">
                <InputField type="email" placeholder="Email *" />
              </div>
            </div>
            <div class="w-full ">
              <InputField type="text" placeholder="Subject *" />
            </div>
            <div class="flex flex-wrap  mb-6">
              <textarea
                rows="6"
                cols="50"
                className="w-full px-4 py-2 bg-transparent border-1 border-gray-800 focus:outline-none text-white"
                placeholder="Message *"
              ></textarea>
            </div>
            <ButtonBlank text="Send" textColor="hover:text-white " />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
