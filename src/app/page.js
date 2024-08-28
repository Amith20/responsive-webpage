"use client";

import CategoryCard from "@/components/CategoryCardComponent";
import Header from "@/components/HeaderComponent";
import Pagination from "@/components/PagnationComponent";
import React, { useState } from "react";
import icon1 from "../../public/icons/app-icon-1.png";
import icon2 from "../../public/icons/app-icon-2.png";
import icon3 from "../../public/icons/app-icon-3.png";

const categories = [
  {
    title: "Works with Shopify POS",
    description:
      "The Works with Shopify POS feature allows you to enhance productivity and streamline your workflow.",
    appCount: 104,
    icons: [icon1, icon2, icon3],
  },
  {
    title: "Useful apps for India",
    description:
      "The Useful apps for India feature allows you to enhance productivity and streamline your workflow.",
    appCount: 18,
    icons: [icon1, icon2, icon3],
  },
  {
    title: "Works with Shopify POS",
    description:
      "The Works with Shopify POS feature allows you to enhance productivity and streamline your workflow.",
    appCount: 15,
    icons: [icon1, icon2, icon3],
  },
  {
    title: "Useful apps for India",
    description:
      "The Useful apps for India feature allows you to enhance productivity and streamline your workflow.",
    appCount: 26,
    icons: [icon1, icon2, icon3],
  },
  {
    title: "Works with Shopify POS",
    description:
      "The Works with Shopify POS feature allows you to enhance productivity and streamline your workflow.",
    appCount: 57,
    icons: [icon1, icon2, icon3],
  },
  {
    title: "Useful apps for India",
    description:
      "The Useful apps for India feature allows you to enhance productivity and streamline your workflow.",
    appCount: 102,
    icons: [icon1, icon2, icon3],
  },
  {
    title: "Works with Shopify POS",
    description:
      "The Works with Shopify POS feature allows you to enhance productivity and streamline your workflow.",
    appCount: 84,
    icons: [icon1, icon2, icon3],
  },
  {
    title: "Useful apps for India",
    description:
      "The Useful apps for India feature allows you to enhance productivity and streamline your workflow.",
    appCount: 8,
    icons: [icon1, icon2, icon3],
  },
  {
    title: "Works with Shopify POS",
    description:
      "The Works with Shopify POS feature allows you to enhance productivity and streamline your workflow.",
    appCount: 25,
    icons: [icon1, icon2, icon3],
  },
  {
    title: "Useful apps for India",
    description:
      "The Useful apps for India feature allows you to enhance productivity and streamline your workflow.",
    appCount: 74,
    icons: [icon1, icon2, icon3],
  },
  {
    title: "Works with Shopify POS",
    description:
      "The Works with Shopify POS feature allows you to enhance productivity and streamline your workflow.",
    appCount: 25,
    icons: [icon1, icon2, icon3],
  },
  {
    title: "Useful apps for India",
    description:
      "The Useful apps for India feature allows you to enhance productivity and streamline your workflow.",
    appCount: 74,
    icons: [icon1, icon2, icon3],
  },{
    title: "Works with Shopify POS",
    description:
      "The Works with Shopify POS feature allows you to enhance productivity and streamline your workflow.",
    appCount: 25,
    icons: [icon1, icon2, icon3],
  },
  {
    title: "Useful apps for India",
    description:
      "The Useful apps for India feature allows you to enhance productivity and streamline your workflow.",
    appCount: 74,
    icons: [icon1, icon2, icon3],
  },
];

const ITEMS_PER_PAGE = 12;

const HomePage = () => {
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
    <div className="pt-24">
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold text-dark-black mb-2">
          Top shopify collections
        </h2>
        <p className="text-light-black text-sm mb-6">
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedCategories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              appCount={category.appCount}
              icons={category?.icons}
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

export default HomePage;
