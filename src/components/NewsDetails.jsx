import React, { useEffect, useState } from "react";
import RightAside from "./homelayout/RightAside";
import NewsDetailsCard from "./NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const data = useLoaderData();
  const { id } = useParams();
  // console.log(data, id, news);
  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);
  return (
    <div className="container grid gap-3 grid-cols-12">
      <section className="col-span-9">
        <NewsDetailsCard news={news} />
      </section>
      <aside className="col-span-3">
        <RightAside />
      </aside>
    </div>
  );
};

export default NewsDetails;
