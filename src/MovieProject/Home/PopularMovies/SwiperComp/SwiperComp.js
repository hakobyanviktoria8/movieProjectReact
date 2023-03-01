import React, { useEffect, useRef } from "react";
import "swiper/css/swiper.min.css";
import "./SwiperComp.css";
import Swiper from "swiper";

const SwiperComp = ({ movies }) => {
  const swiper = useRef(null);
  const IMG_URL = "https://image.tmdb.org/t/p/original/";
  const categoryData = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  let arrImg = [];
  let voteAverage = [];

  movies.results &&
    movies.results.map((x) => {
      arrImg.push(x.poster_path);
      voteAverage.push(x.vote_average);
    });

  useEffect(() => {
    swiper.current = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="AppSwiper">
      <div className="swiperMainContainer">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {categoryData.map((x) => (
              <div className="swiper-slide" key={x}>
                <div className="imgCardHolder">
                  <div>
                    <p>{voteAverage[x]} </p>
                  </div>
                  {arrImg[x] && (
                    <img
                      className={"swiperImg"}
                      src={IMG_URL + arrImg[x]}
                      alt="images"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"> </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperComp;
