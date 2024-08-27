"use client";
import CategoryCard from "@/components/CategoryCardComponent";
import Header from "@/components/HeaderComponent";
import Pagination from "@/components/PagnationComponent";
import React, { useState } from "react";

const categories = [
  { title: "Category 1", description: "Description for category 1" },
  { title: "Category 2", description: "Description for category 2" },
  { title: "Category 3", description: "Description for category 3" },
  { title: "Category 4", description: "Description for category 4" },
  { title: "Category 5", description: "Description for category 5" },
  { title: "Category 6", description: "Description for category 6" },
  { title: "Category 7", description: "Description for category 7" },
  { title: "Category 8", description: "Description for category 8" },
  { title: "Category 9", description: "Description for category 9" },
  { title: "Category 10", description: "Description for category 10" },
];

const ITEMS_PER_PAGE = 6;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE);
  const displayedCategories = categories.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pt-16">
      <Header />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {displayedCategories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Home;
