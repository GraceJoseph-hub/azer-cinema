import cardData from "./cardData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const CardSlider = () => {
  return (
    <div className="h-[50vh] md:h-screen w-full">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        slidesPerView="auto"
        speed={1000}
        slideToClickedSlide={true}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        fadeEffect={{ crossFade: true }}
        breakpoints={{
          320: { spaceBetween: 40 },
          430: { spaceBetween: 50 },
          580: { spaceBetween: 70 },
          650: { spaceBetween: 30 },
        }}
        className="h-full w-full"
      >
        {cardData.map((movie, index) => (
          <SwiperSlide
            className="swiper-slide relative w-full shadow-[1px_22px_44px_rgba(0,0,0,0.2)] transition duration-[2000ms] select-none"
            key={index}
          >
            <Image
              src={movie.img}
              alt={index}
              className="w-full h-full object-cover bg-center"
            />
            <div className="title flex flex-col justify-end h-[100%] pt-6 px-6 pb-7">
              <h1 className="font-sunflower text-[#fff] text-[2.5rem] font-bold opacity-100">
                {movie.title}
              </h1>
            </div>
            <div className="content absolute inset-0 w-full h-full p-[25px] pb-[65px] flex flex-col justify-end bg-black/50 bg-gradient-to-b from-transparent via-transparent to-black/80 text-white opacity-0">
              <div className="text w-[50%] max-[768px]:w-full">
                <h2>{movie.subTitle}</h2>
                <p>{movie.text}</p>
              </div>
              <div className="genre">
                <span style={{ "--1": 1 }}>{movie.genres[0]}</span>
                <span style={{ "--1": 2 }}>{movie.genres[1]}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination" style={{background: "transparent"}}></div>
      </Swiper>
    </div>
  );
};

export default CardSlider;
