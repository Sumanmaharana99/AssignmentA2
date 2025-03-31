import React, { useEffect, useState } from 'react'

const Content = () => {
    const contents = [
        {
          title: "All Information In One Place",
          subtitle: "Simplify Management with a Unified Data Platform.",
        },
        {
          title: "Access Anytime, Anywhere",
          subtitle: "Empowering with Data on Demand Across Devices.",
        },
        {
          title: "Lower Costs, Higher Value",
          subtitle: "Offering Premium Features at a Fraction of a Price.",
        },
      ];
      const [index,setIndex] = useState(0);
      const [fade,setFade] = useState(false);

      useEffect(()=>{
        const interval = setInterval(() => {
            setFade(true); 
            setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % contents.length);
            setFade(false); 
            }, 500); 
            }, 3000);

          return () => clearInterval(interval);
      },[]);

  return (
    <div className={`transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
        <p className="text-white text-2xl sm:text-4xl  md:text-6xl ">{contents[index].title}</p>
        <h2 className="text-white font-bold text-xs sm:text-sm md:text-lg mt-4  text-center">{contents[index].subtitle}</h2>
        
    </div>
  )
}

export default Content
