import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwiperBlock.scss";
import { Autoplay, Pagination, Navigation } from "swiper";
import Slider1 from "assets/slider1.jpg";
import Slider2 from "assets/slider2.jpg";
import Slider3 from "assets/slider3.jpg";

export default function SwiperBlock() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-quote-wrap">
            <span className="swiper-quote">
              "Hot air baloon ride <br />
              at the Pointy <br />
              Peak Mountains."
            </span>
            <img src={Slider1} alt="Slider1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-quote-wrap">
            <span className="second-swiper-quote">
              "The mountain does not seem impregnable when viewed from its top."
            </span>
            <img src={Slider2} alt="Slider2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-quote-wrap">
            <span className="third-swiper-quote">
              "The limit for us is only the sky."
            </span>
            <img src={Slider3} alt="Slider3" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
