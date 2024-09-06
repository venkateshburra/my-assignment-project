import React, { useState } from "react";
import componentImageLeft from './Component313.png';
import componentImageRight from './Component312.png'; 
import componentRectangle from './rr.jpg'; 

function GallaryPost() {
  // State to hold the list of images
  const [images, setImages] = useState([componentRectangle, componentRectangle, componentRectangle]);

  // Function to handle adding a new image
  const addImage = () => {
    setImages([...images, componentRectangle]); // Adds a new image to the array
  };

  return (
    <div className="bg-[#2B3036] pb-12">
      <div className='flex flex-row items-center px-6 justify-between space-x-3'>
        <button className='bg-black text-white rounded-xl py-2 px-12'>Gallary</button>
        <div className='flex flex-row whitespace-nowrap items-center'>
          <button 
            className='bg-gray-600 text-white py-1 px-2 rounded' 
            onClick={addImage} // Add image when button is clicked
          >
            + ADD IMAGE
          </button>
          <img src={componentImageLeft} alt="Component Image" />
          <img src={componentImageRight} alt="Component Image" />
        </div>
      </div>

      {/* Display the images in the gallery */}
      <div className="flex flex-row px-3 flex-wrap space-x-2 justify-between items-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="rounded-3xl my-5"
            alt={`Component Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default GallaryPost;
