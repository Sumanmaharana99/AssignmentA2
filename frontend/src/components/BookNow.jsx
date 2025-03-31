import React, { useState } from 'react'
import axios from 'axios';
import toast from "react-hot-toast";
const BookNow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institutionName: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/api/user/register', formData);
        if(response){
          setFormData({ name: "", email: "", phone: "", institutionName: "", message: "" });
          console.log("Form submitted successfully:", response.data);
          toast.success("Form submitted successfully!");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
  }

  return (
    <>
    <div className='flex flex-col gap-2 justify-around  items-center bg-transparent w-full p-1 mt-3 mb-0 '>

      <div className='flex items-center'>
        <button onClick={toggle} className='bg-blue-500 text-white px-2 sm:px-3 md:px-5 py-1  text-xs sm:text-sm md:text-sm rounded-md transition duration-300 hover:bg-blue-600 hover:scale-105'>Book A Demo</button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96">
            <h2 className="text-black text-lg font-bold text-center">Get In Touch</h2>
            <p className="text-gray-600 text-xs text-center mt-2">Fill out the form to get a call from  us.</p>
            <form className="flex flex-col mt-4 gap-2 text-black" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Contact Number*"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                required
              />
              <input
                type="text"
                name="institutionName"
                placeholder="Institution Name*"
                value={formData.institutionName}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
              ></textarea>
              
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md mt-2 w-full hover:bg-blue-600 transition">
                Submit
              </button>
            </form>

            {/* 🔹 Close Button */}
            <button 
              onClick={toggle} 
              className="mt-4 text-red-500 hover:underline w-full text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}



      <div className='flex flex-col items-center gap-2'>

      <button className='flex items-center gap-1 bg-blue-500 text-white px-2 sm:px-3 md:px-4 py-1  text-xs sm:text-sm md:text-sm rounded-md transition duration-300 hover:bg-blue-600 hover:scale-105 '>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" color="#FFFFFF" fill="none">
      <path d="M9.1585 5.71223L8.75584 4.80625C8.49256 4.21388 8.36092 3.91768 8.16405 3.69101C7.91732 3.40694 7.59571 3.19794 7.23592 3.08785C6.94883 3 6.6247 3 5.97645 3C5.02815 3 4.554 3 4.15597 3.18229C3.68711 3.39702 3.26368 3.86328 3.09497 4.3506C2.95175 4.76429 2.99278 5.18943 3.07482 6.0397C3.94815 15.0902 8.91006 20.0521 17.9605 20.9254C18.8108 21.0075 19.236 21.0485 19.6496 20.9053C20.137 20.7366 20.6032 20.3131 20.818 19.8443C21.0002 19.4462 21.0002 18.9721 21.0002 18.0238C21.0002 17.3755 21.0002 17.0514 20.9124 16.7643C20.8023 16.4045 20.5933 16.0829 20.3092 15.8362C20.0826 15.6393 19.7864 15.5077 19.194 15.2444L18.288 14.8417C17.6465 14.5566 17.3257 14.4141 16.9998 14.3831C16.6878 14.3534 16.3733 14.3972 16.0813 14.5109C15.7762 14.6297 15.5066 14.8544 14.9672 15.3038C14.4304 15.7512 14.162 15.9749 13.834 16.0947C13.5432 16.2009 13.1588 16.2403 12.8526 16.1951C12.5071 16.1442 12.2426 16.0029 11.7135 15.7201C10.0675 14.8405 9.15977 13.9328 8.28011 12.2867C7.99738 11.7577 7.85602 11.4931 7.80511 11.1477C7.75998 10.8414 7.79932 10.457 7.90554 10.1663C8.02536 9.83828 8.24905 9.56986 8.69643 9.033C9.14586 8.49368 9.37058 8.22402 9.48939 7.91891C9.60309 7.62694 9.64686 7.3124 9.61719 7.00048C9.58618 6.67452 9.44362 6.35376 9.1585 5.71223Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <a href='#' className="text-white text-xs sm:text-xm md:text-sm ">+91-80816 38914</a>
      </button>

      <div className='flex items-center gap-1 bg-blue-500 text-white px-2 sm:px-3 md:px-4 py-1  text-xs sm:text-sm md:text-sm rounded-md transition duration-300 hover:bg-blue-600 hover:scale-105'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" color="#FFFFFF" fill="none">
    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
</svg>
   <a href='#' className="text-white text-xs sm:text-xm md:text-sm">contactus@a2developers.org</a>
      </div>
      </div>
     
    </div>

      </>
  )
}

export default BookNow;
