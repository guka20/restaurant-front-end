import "./Home.css";
import { SwiperSlide } from "swiper/react";
import { CartSwiper, DishesPagination, Header } from "./components";
import { ProductCart } from "src/components";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "src/helper";
import { ProductCardTypes } from "src/types/Types";

export const Home = () => {
  //  const { data, isError } = useQuery({
  //    queryKey: ["products", currentData],
  //    queryFn: () => fetchProducts(currentData),
  //  });
  const fresh = "fruit";
  const { data, isError } = useQuery({
    queryKey: ["fresh", fresh],
    queryFn: () => fetchProducts(fresh),
  });
  if (isError) return <h1>Something went wrong</h1>;

  return (
    <div className="home">
      <Header />
      <CartSwiper>
        {data?.data.map((prod: ProductCardTypes) => (
          <SwiperSlide key={prod.product_id}>
            <ProductCart
              name={prod.name}
              image={prod.image}
              subtitle={prod.subtitle}
              price={prod.price}
              product_id={prod.product_id}
            />
          </SwiperSlide>
        ))}
      </CartSwiper>
      <DishesPagination />
    </div>
  );
};
