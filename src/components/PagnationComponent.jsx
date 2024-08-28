
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const startItem = (currentPage - 1) * 10 + 1;
  const endItem = Math.min(currentPage * 10, 1000);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-between items-center py-4">
      <div className="text-sm text-gray-600">
        Showing <span className="font-semibold text-black">{startItem}-{endItem}</span> of <span className="font-semibold text-black">1000</span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="px-3 py-1 border border-gray-300 rounded-md text-gray-600"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        
        {pageNumbers.slice(0, 3).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 border rounded-md ${page === currentPage ? 'border-blue-500 bg-blue-100 text-blue-600' : 'border-gray-300 text-gray-600'}`}
          >
            {page}
          </button>
        ))}
        
        {totalPages > 3 && (
          <>
            <span className="px-3 py-1">...</span>
            <button
              onClick={() => onPageChange(totalPages)}
              className={`px-3 py-1 border rounded-md ${totalPages === currentPage ? 'border-blue-500 bg-blue-100 text-blue-600' : 'border-gray-300 text-gray-600'}`}
            >
              {totalPages}
            </button>
          </>
        )}
        
        <button
          className="px-3 py-1 border border-gray-300 rounded-md text-gray-600"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
