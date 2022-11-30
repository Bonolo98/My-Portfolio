import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vyu0i99', 'template_lvrh4fe', form.current, '6wwyiaDZqKtwPMnpr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };






  // function encode(data) {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "test", name, email, message }),
  //   })
  //     .then(() => alert("Message sent!"))
  //     .catch((error) => alert(error));
  // }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto ">
        <form
       
          name="test"
          ref={form} onSubmit={sendEmail} 
          className="flex-auto justify-center">
          <h2 className="text-gray-600 sm:text-4xl text-3xl mb-1 font-medium title-font flex justify-center">
            Hire Me
          </h2>
          <p className="leading-relaxed text-black mb-5 flex justify-center">
            If you would like to enquire more or hire, please provide your details below and click on"Send".
          </p>




<div className='flex space-x-5 md:flex-row'>

<div className=''>
          <div className="relative mb-4 w-1/2">
            <label htmlFor="name" className="leading-7 text-sm text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-96 bg-gray-600 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          
            />
          </div>
          <div className="relative mb-4 w-1/2">
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-96 bg-gray-600 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

            />
          </div>
          <div className="relative mb-4 w-1/2">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-96 bg-gray-600 rounded border border-gray-700 focus:border-gray-400 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              
            />
          </div>
          <button
            type="submit"
            className="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg w-96 snap-center">
            Send
          </button>
          </div>

<div className='mt-5 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16      md:items-start md:text-left mb-16 md:mb-0 '>
          <div className="relative mb-4 w-full">
          <label htmlFor="name" className="leading-7 text-sm text-black ">
              Call/Whatsapp
            </label> 
            <h4 htmlFor="name" className="leading-7 text-sm text-black font-bold">
              0648621677
            </h4>
          </div>
         
          <div className="relative mb-4 w-1/2">
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <h4 htmlFor="email" className="leading-7 text-sm text-black font-bold">
              bonolosolomon9846@gmail.com
            </h4>
          </div>
         

          {/* <div className="relative mb-4 w-1/2">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-600 rounded border border-gray-700 focus:border-gray-400 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
          </div>
          {/* <button
            type="submit"
            className="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg w-96 snap-center">
            Send
          </button> */}
          </div>
          
</div>
          
          
          
        </form>
      </div>
    </section>
  );
}
