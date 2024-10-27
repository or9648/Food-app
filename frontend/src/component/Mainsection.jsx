import React from 'react';
import './Mainsection.css'; // Import CSS for global styles
import Foodcard from './Foodcard';

function Mainsection({ data, loading, error }) {
  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  // Check if the data array is empty
  if (data.length === 0) {
    return <p className="text-center text-white">No food items available</p>;
  }

  return (
    <div className="relative w-screen h-5/6 ">
      <img
        src="/image/bg.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
      <div className="relative flex flex-wrap justify-center  gap-10 items-center w-full h-full">
        {data.map((item, index) => (
          <Foodcard
            key={index}
            name={item.name}
            description={item.text}
            image={item.image}
            price={item.price}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
}

export default Mainsection;
