import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = ({ setCategory }) => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-ring loading-lg"></span>}
      >
        <Categories setCategory={setCategory} />
      </Suspense>
    </div>
  );
};

export default LeftAside;
