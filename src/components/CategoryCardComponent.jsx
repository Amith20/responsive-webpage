
import Image from 'next/image';
import React from 'react';


const CategoryCard = ({ title, description, appCount, icons }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold text-dark-black mb-2">{title}</h2>
      <p className="text-light-black text-sm mb-4">{description}</p>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          {icons?.map((icon, index) => (
            <Image key={index} src= {icon} alt="icon" width={24} height={24}/>
          ))}
        </div>
      </div>
      <hr />
      <div className='flex items-center justify-between'>
      <p className="text-base text-green-600 font-semibold ">{appCount} Apps</p>
      <button className=" mt-4 bg-black text-white px-4 py-2 rounded-full ">
        Explore more ➔
      </button>
      </div>
    </div>
  );
};

export default CategoryCard;
