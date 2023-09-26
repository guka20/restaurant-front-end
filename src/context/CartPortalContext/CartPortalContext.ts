import { Dispatch, SetStateAction, createContext, useContext } from "react";

type CartPortalTypes = {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
};

export const CartPortalContext = createContext({} as CartPortalTypes);
export const useCartPortalContext = ()=>{
    return useContext(CartPortalContext)
}
