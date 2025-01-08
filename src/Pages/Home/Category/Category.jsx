import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderImg1 from "../../../assets/home/slide1.jpg";
import SliderImg2 from "../../../assets/home/slide2.jpg";
import SliderImg3 from "../../../assets/home/slide3.jpg";
import SliderImg4 from "../../../assets/home/slide4.jpg";
import SliderImg5 from "../../../assets/home/slide5.jpg";
export default function Category() {
  return (
    <div className="mb-6">
      <Swiper
        slidesPerView={3}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={SliderImg1} alt="" />
          <h3 className=" ml-12 uppercase -mt-12 text-white text-4xl">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImg3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImg4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SliderImg5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
