import React from 'react';

function Foodcard({ name, description, image, price, type }) {
   console.log(description,type)
  const imageUrl = image ? `http://localhost:9000${image}` : 'http://localhost:9000/images/egg.png';

  return (
    <div className="bg-opacity-30 backdrop-blur-md p-4 rounded-lg shadow-lg w-full max-w-xs h-48 text-center flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold text-white mb-1">{name || 'Unnamed Item'}</h2>
        <img
          src={imageUrl}
          alt={name || 'Image Unavailable'}
          className="w-full h-14 object-cover rounded-md mb-1"
        />
        <p className="text-white font-semibold mb-2">{type || 'Unknown Type'}</p> {/* Display type */}
        <p className="text-white font-semibold mb-2">{description || 'No description available'}</p>
      </div>
      <button className="bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-300">
        {price ? `$${price}` : 'Price not available'}
      </button>
    </div>
  );
}

export default Foodcard;
