import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button
        className="px-4 py-2 bg-light-black text-white rounded"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {[...Array(totalPages).keys()].map((_, index) => (
        <button
          key={index}
          className={`px-4 py-2 ${
            currentPage === index + 1
              ? "bg-dark-black text-white"
              : "bg-white text-dark-black"
          } rounded`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="px-4 py-2 bg-light-black text-white rounded"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
