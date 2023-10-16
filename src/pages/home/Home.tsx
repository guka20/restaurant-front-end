import "./Home.css";
import { SwiperSlide } from "swiper/react";
import { CartSwiper, DishesPagination, Header } from "./components";
import { ProductCart, Loading } from "src/components";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "src/helper";
import { ProductCardTypes } from "src/types/Types";

const Home = () => {
  const fresh = "fruit";
  const { data, isError, isLoading } = useQuery({
    queryKey: ["fresh", fresh],
    queryFn: () => fetchProducts(fresh),
  });
  if (isError) return <h1>Something went wrong</h1>;

  if (isLoading) return <Loading />;
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
export default Home;
