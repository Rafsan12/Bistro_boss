/* eslint-disable react/prop-types */
import { Parallax } from "react-parallax";
export default function Cover({ bgImg, title, subTitle }) {
  return (
    <>
      <Parallax blur={{ min: -50, max: 50 }} bgImage={bgImg} strength={-200}>
        <div className="hero h-[700px]">
          <div className="hero-overlay "></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5 uppercase">{subTitle}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
}
