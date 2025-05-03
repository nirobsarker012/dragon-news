import React, { use } from "react";
const categoriesPromise = fetch(`/public/categories.json`).then((res) =>
  res.json()
);
const Categories = ({ setCategory }) => {
  const categories = use(categoriesPromise);

  //   const { id } = categories;
  //   console.log(categories);
  return (
    <div>
      <h2 className="font-bold">All Categories</h2>
      <div className="grid grid-cols-1 mt-5 gap-2">
        {categories.map((singleCategory) => (
          <div
            key={Math.random()}
            onClick={() => setCategory(singleCategory?.name)}
            className={
              "hover:bg-[#E7E7E7] rounded-[5px] py-2 px-4 font-semibold text-center hover:text-[#403F3F] text-[16px] bg-white text-[#9F9F9F] transition-all duration-300"
            }
          >
            {singleCategory.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
