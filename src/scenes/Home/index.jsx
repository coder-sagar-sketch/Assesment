import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const words = ["Data Analytics ", "Digital Marketing and E-Commerce ", "IT Support ", "Project Management ","UX Design ", "Cybersecurity", "General"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const brandNameStyle = {
    color: 'gray',   // Red brand name color
  };

  const wordStyle = {
    backgroundColor: '#E0E7FF',  
    color: 'blue',             
    padding: '4px 8px',        
    display: 'inline-block', 
           
    fontSize: '20px'          
  };
  const pageStyle = {
    background: 'Whitesmoke',  // Pink background color for the page
    
  };

  const navigate = useNavigate(); // Get the navigate function

  const handleStartPracticing = () => {
    navigate('/View'); // Navigate to the "view" route
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center" style={pageStyle}>
      <h1 className="text-6xl  text-center text-gray-800 mb-6" style={brandNameStyle}>
        interview warmup
      </h1>
      <p className="text-center text-gray-700 mb-6 text-xl">A quick way to prepare for your next interview in </p>
      <div className="text-center text-gray-700 mb-6">
        <p style={wordStyle}>
          {words[currentWordIndex]}
        </p>
      </div>
      <p className="text-center text-gray-700 mb-6 text-xl">
      Practice key questions, get insights about your answers, and get more <br></br>comfortable interviewing.
      </p>
      <button className="bg-blue-500 text-white  text-xl py-4 px-8  rounded-md hover:bg-blue-700 "
       onClick={handleStartPracticing}
       >
        Start praciting
      </button>
    </div>
  );
};

export default HomePage;
