import React, { useEffect, useMemo, useState } from "react";
import SingleNewsData from "./SingleNewsData";

const HeroContent = ({ category }) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch("/news.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setNewsData(data);
      } catch (err) {
        console.error("Failed to fetch news data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  const filteredNewsData = useMemo(() => {
    if (!category || category.length === 0) {
      return newsData;
    }
    return newsData.filter((item) => category.includes(item.category));
  }, [newsData, category]);

  if (loading) return <div>Loading news...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Dragon News Home</h2>
      <div className="space-y-5">
        {filteredNewsData?.length > 0 ? (
          filteredNewsData?.map((singleData) => (
            <SingleNewsData
              key={singleData.id || singleData.title}
              singleData={singleData}
            />
          ))
        ) : (
          <div>No news found for this category.</div>
        )}
      </div>
    </div>
  );
};

export default HeroContent;
