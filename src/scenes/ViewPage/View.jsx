// import clickSound from "./assests/clickSound.mp3";
import React, { useRef } from 'react';



const ButtonPage = () => {

  
    // const audioRef = useRef(null);
  
    // const playAudio = () => {
    //   if (audioRef.current) {
    //     audioRef.current.play();
    //   }
    // };

  // function play () {
  //   new Audio("./assests/clickSound.mp3").play();
  // }


  // const playSoundOnHover = () => {
  //   audio.currentTime = 0; // Reset audio to the beginning
  //   audio.play();
  // };

  // const playSoundOnClick = () => {
  //   audio.currentTime = 0;
  //   audio.play();
  // };

  const pageStyle = {
    background: 'whitesmoke',
    overflowY: 'auto',
    height: '100vh',
  };

  const wordStyle = {
    fontSize: '24px',
    lineHeight: '40px',
    letterSpacing: '0px',
    textAlign: 'center',
    marginBottom: '100px',
    paddingTop: '70px',
  };

  const contentContainerStyle = {
    marginTop: '64px',
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center" style={pageStyle}>
      <div className="text-center p-4" style={contentContainerStyle}>
        <p className="p-4" style={wordStyle}>What field do you want to practice for?</p>
        <div className="flex flex-col space-y-4">
        {/* <audio ref={audioRef}>
        <source src={"./assests/clickSound.mp3"} type="audio/mpeg" />
      </audio> */}
          <button className="p-2 bg-lavender   text-gray-600  font-serif   hover:bg-white transition-colors  shadow hover:shadow-2xl hover:shadow-sky-300 rounded-lg px-6 py-2 justify-none"
          // onMouseEnter={playSoundOnHover} // Play sound on hover
          // onClick={playSoundOnClick} // Play sound on click
          // onClick={playAudio}
          >
            Data Analytics
          </button>
          <button className="p-2 bg-lavender   text-gray-600  font-serif   hover:bg-white transition-colors  shadow hover:shadow-2xl hover:shadow-sky-300 rounded-lg px-6 py-2 justify-none"
          >
            Digital Marketing and E-Commerce
          </button>
          <button className="p-2 bg-lavender   text-gray-600  font-serif   hover:bg-white transition-colors  shadow hover:shadow-2xl hover:shadow-sky-300 rounded-lg px-6 py-2 justify-none">
            IT Support
          </button>
          <button className="p-2 bg-lavender   text-gray-600  font-serif   hover:bg-white transition-colors  shadow hover:shadow-2xl hover:shadow-sky-300 rounded-lg px-6 py-2 justify-none">
            Project Management
          </button>
          <button className="p-2 bg-lavender   text-gray-600  font-serif   hover:bg-white transition-colors  shadow hover:shadow-2xl hover:shadow-sky-300 rounded-lg px-6 py-2 justify-none">
            UX Design
          </button>
          <button className="p-2 bg-lavender   text-gray-600  font-serif   hover:bg-white transition-colors  shadow hover:shadow-2xl hover:shadow-sky-300 rounded-lg px-6 py-2 justify-none">
            Cybersecurity
          </button>
          <button className="p-2 bg-lavender   text-gray-600  font-serif   hover:bg-white transition-colors  shadow hover:shadow-2xl hover:shadow-sky-300 rounded-lg px-6 py-2 justify-none">
            General
          </button>
        </div>
      </div>
    </div>
  );
};


export default ButtonPage;
