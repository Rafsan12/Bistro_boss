import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
export default function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const response = await fetch("http://localhost:5000/reviews");
        const result = await response.json();
        setReviews(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviewData();
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={"What Our Clients Say"}
      />
      <Swiper
        autoplay={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-orange-500">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
