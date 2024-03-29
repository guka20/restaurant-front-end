import "./ProductCart.css";
import { BsCartPlus } from "react-icons/bs";
import { ProductCardTypes } from "src/types/Types";
import { useUserTypeContext } from "src/context";
import { UserEnum } from "src/types/user.types";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewCart } from "src/helper";
import Swal from "sweetalert2";
export const ProductCart = ({
  name,
  subtitle,
  price,
  product_id,
  image,
}: ProductCardTypes) => {
  const { userType } = useUserTypeContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation((productID: string) => addNewCart(productID), {
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["carts"],
        refetchType: "active",
      });
    },
    onError: (error: Error) => {
      Swal.fire({
        title: "Oops...",
        text: String(error.message),
        icon: "error",
      });
    },
  });
  const handleAddInCartButton = () => {
    if (userType === UserEnum.GUEST) {
      navigate("/login");
    } else {
      mutation.mutate(product_id);
    }
  };
  return (
    <div className="product-cart">
      <div className="image-cart-place">
        <div className="image-place">
          <img src={image} alt="" />
        </div>
        {userType !== UserEnum.ADMIN && (
          <button className="add-to-cart" onClick={handleAddInCartButton}>
            <BsCartPlus />
          </button>
        )}
      </div>
      <div className="textures">
        <span className="name">{name}</span>
        <span className="sub-title">{subtitle}</span>
        <span>
          <span className="dollar-icon">$ </span>
          {price}
        </span>
      </div>
    </div>
  );
};
