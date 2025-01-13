import FeaturedImg from "../../../assets/home/featured.jpg";
import Button from "../../../components/Button/Button";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";

export default function Featured() {
  return (
    <div className="featured-item bg-fixed bg-opacity-75 bg-slate-900 text-white pt-8 my-20">
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 ">
        <div>
          <img src={FeaturedImg} alt="" />
        </div>
        <div className="md:ml-6">
          <p>March 20, 2023</p>
          <p>WHERE TO FIND THE BEST INGREDIENTS?</p>
          <p>
            Great meals start with the finest ingredients. At CulinaryCloud, we
            source fresh, organic produce and premium meats from trusted local
            farms. Our commitment to quality ensures every dish bursts with
            authentic flavors. Join us for a dining experience where freshness
            meets excellence.
          </p>
          <Button name={"Order Now"} />
        </div>
      </div>
    </div>
  );
}
