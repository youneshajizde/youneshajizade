"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import placeholderImg from "@/public/assets/placeholder.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Article = {
  title: string;
  cover_image?: string;
  canonical_url: string;
  user: {
    name: string;
  };
};

function CustomArrow({ onClick, direction }: { onClick?: () => void; direction: "prev" | "next" }) {
  return (
    <button
      onClick={onClick}
      className={`absolute z-10 top-1/2 transform -translate-y-1/2 ${
        direction === "prev" ? "left-2" : "right-2"
      } p-1 text-white rounded-full shadow-md border-[2px] border-white`}
      aria-label={direction === "prev" ? "Previous Slide" : "Next Slide"}
    >
      {direction === "prev" ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );
}

function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=youneshajizadeh")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Error fetching articles:", err));
  }, []);

  console.log(articles);

  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024, // For tablet screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <h1 className="text-3xl mb-5">My Articles</h1>

      <Slider {...settings}>
        {articles.map((article, index) => (
          <div
            onClick={() => router.push(article.canonical_url)}
            key={index}
            className="bg-gray-200 rounded-2xl w-full h-[250px] relative"
          >
            <Image
              src={article.cover_image || placeholderImg}
              alt={`Cover image for ${article.title}`}
              width={1000}
              height={1000}
              className="object-cover w-full h-full rounded-2xl"
            />
            {/* Title and user info */}
            <div className="flex flex-col space-y-3 absolute bottom-3 left-4 right-4 bg-opacity-60 text-white font-semibold p-2 rounded-md">
              <h1 className="text-2xl">{article.title}</h1>
              <h2 className="text-sm">Posted by {article.user.name}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Articles;
