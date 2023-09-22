import React from "react";
import "./Home.css";
import { SwiperSlide } from "swiper/react";
import { CartSwiper, DishesPagination, Header } from "./components";
import { ProductCart } from "src/components";

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <CartSwiper>
        <SwiperSlide>
          <ProductCart title="Apple" subtitle="Red Delicious" price={15} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart title="Apple" subtitle="Red Delicious" price={15} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart title="Apple" subtitle="Red Delicious" price={15} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart title="Apple" subtitle="Red Delicious" price={15} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart title="Apple" subtitle="Red Delicious" price={15} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart title="Apple" subtitle="Red Delicious" price={15} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart title="Apple" subtitle="Red Delicious" price={15} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart title="Apple" subtitle="Red Delicious" price={15} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart title="Apple" subtitle="Red Delicious" price={15} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart title="Apple" subtitle="Red Delicious" price={15} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart title="Apple" subtitle="Red Delicious" price={15} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart title="Apple" subtitle="Red Delicious" price={15} />
        </SwiperSlide>
      </CartSwiper>
      <DishesPagination />
    </div>
  );
};
