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
          <ProductCart
            name="Apple"
            subtitle="Red Delicious"
            price={15}
            product_id="4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart
            name="Apple"
            subtitle="Red Delicious"
            price={15}
            product_id="5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart
            name="Apple"
            subtitle="Red Delicious"
            price={15}
            product_id="6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart
            name="Apple"
            subtitle="Red Delicious"
            price={15}
            product_id="7"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart
            name="Apple"
            subtitle="Red Delicious"
            price={15}
            product_id="8"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart
            name="Apple"
            subtitle="Red Delicious"
            price={15}
            product_id="9"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart
            name="Apple"
            subtitle="Red Delicious"
            price={15}
            product_id="10"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart
            name="Apple"
            subtitle="Red Delicious"
            price={15}
            product_id="11"
          />
        </SwiperSlide>
      </CartSwiper>
      <DishesPagination />
    </div>
  );
};
