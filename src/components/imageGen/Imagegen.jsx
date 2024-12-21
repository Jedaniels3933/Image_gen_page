import React from 'react';
import './Imagegen.css';

export const Imagegen = () => {

    // const [image_url,setImage_url] = useState("/");
    // let inputRef = useRef(null);
  return (
    <div className="imagegen">
      <div className="header">
        AI Image <span>Generator</span>
      </div>
      <div className="image">
        {/* Ensure this path is correct based on your project structure */}
        <img src="src/images/Logo.png" alt="Aura" />
      </div>
      <div className="search-box">
        <input type="text" className='search-input' placeholder="Enter Prompt " />
        <button className='search-button'>Generate Image</button>
      </div>
      <div className="button">
        <button>Save Logo</button>
      </div>
      <div className="button">
        <button>Design a custom Logo</button>
      </div>
      
      
        
    
      <div className="footer">
        <p>Developed by <span>Team Aura</span></p>
      </div>
      
    </div>
  );
};




export default Imagegen;

