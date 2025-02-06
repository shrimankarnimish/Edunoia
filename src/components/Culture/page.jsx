import React from "react";
import NavBar from "../Navbar/NavBar";
import "./Page.css";
import backgroundImage from "../Culture/images/GroupPic.png"; // Import the image

const Page = () => {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Use JSX for the image
    >
    
      <NavBar />
      
    </div>
  );
};

export default Page;
