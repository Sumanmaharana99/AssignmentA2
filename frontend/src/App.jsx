import React from 'react';
import './index.css'; 
import BookNow from './components/BookNow.jsx';
import Content from './components/Content.jsx';
import Navbar from './components/Navbar.jsx';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
       
       
     <Toaster />
      {/* Content Over Video */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
     
      <Navbar />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40 text-white">
        <Content />
        <BookNow />
       </div>
    </div>
    
    </>
  );
}

export default App;
