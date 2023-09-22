import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { PropsWithChildren, ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CartSwiper.css";
export const CartSwiper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="slider-place">
      <div className="swiper-header">
        <span className="title">Our Fresh & Healthy Fruits</span>
        <div className="buttons">
          <button id="prev-el-btn" className="slide-button">
            <MdKeyboardArrowLeft />
          </button>

          <button id="next-el-btn" className="slide-button">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView="auto"
        navigation={{
          nextEl: "#next-el-btn",
          prevEl: "#prev-el-btn",
        }}
        pagination={{ clickable: true }}
      >
        {children}
      </Swiper>
    </div>
  );
};
