import React,{useRef} from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./BottomPart.css"; 
const BottomPart = () => {
  return (
    <div className="bottom-part">
      <div className="container3">
        <div className="title">
          <h2 className="section-title">Books Category</h2>
        </div>
    
    
        <div className="post-cards">
       
          <div className="post-card">
            <img src="b1.jpg" alt="Post" className="post-image" />
            <p className="post-description">Art & Photography</p>
          </div>
        
          <div className="post-card">
          <img src="b2.jpg" alt="Post" className="post-image" />
            <p className="post-description">Children's Books</p>
          </div>
          <div className="post-card">
            <img src="b3.jpg" alt="Post" className="post-image" />
            <p className="post-description">Craft & Hobbies</p>
          </div>
          <div className="post-card">
            <img src="b4.jpg" alt="Post" className="post-image" />
            <p className="post-description">Crime & thriller</p>
          </div>
          <div className="post-card">
            <img src="b5.jpg" alt="Post" className="post-image" />
            <p className="post-description">Science & Tech</p>
          </div>
          <div className="post-card">
            <img src="b6.jpg" alt="Post" className="post-image" />
            <p className="post-description">Other Books</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default BottomPart;
