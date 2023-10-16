import { useState } from "react";
import "./CartItem.css";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartType } from "../../types/cart.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeQuanity, deleteCartItemById } from "src/helper";
import Swal from "sweetalert2";
type CartItemProp = {
  cart: CartType;
};
type Mutationtype = {
  counter: number;
  cartId: string;
};
export const CartItem = ({ cart }: CartItemProp) => {
  const queryClient = useQueryClient();
  const updatemutation = useMutation((params: Mutationtype) =>
    changeQuanity(params.counter, params.cartId)
  );
  const deleteMutation = useMutation(
    (cart_id: string) => deleteCartItemById(cart_id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["carts"],
          refetchType: "active",
        });
        Swal.fire({
          title: "Cart Deleted",
          icon: "success",
          timer: 2000,
        });
      },
    }
  );
  const [counter, setCounter] = useState<number>(cart.quantity);

  const handleCounterClick = (num: number) => {
    setCounter((prev) => prev + num);
    updatemutation.mutate({
      counter: counter + num,
      cartId: cart.cart_item_id,
    });
  };
  const hanldeDeleteClick = () => {
    deleteMutation.mutate(cart.cart_item_id);
  };
  return (
    <div className="cart-item">
      <div className="image-place">
        <img src={cart.product.image} alt="" />
      </div>
      <div className="texture">
        <div>{cart.product.name}</div>
        <div>
          <span className="dollar-icon">$ </span> {cart.product.price}
        </div>
      </div>
      <div className="counter">
        <button disabled={counter === 1} onClick={() => handleCounterClick(-1)}>
          <AiOutlineMinus />
        </button>
        <span className="num">{counter}</span>
        <button>
          <AiOutlinePlus onClick={() => handleCounterClick(1)} />
        </button>
      </div>
      <button className="delete-icon" onClick={hanldeDeleteClick}>
        <AiFillDelete />
      </button>
    </div>
  );
};
