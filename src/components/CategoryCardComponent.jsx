import React from "react";

const CategoryCard = ({ title, description }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg h-60 flex flex-col items-center justify-center">
      <h2 className="text-lg font-semibold text-dark-black">{title}</h2>
      <p className="text-light-black">{description}</p>
    </div>
  );
};

export default CategoryCard;
