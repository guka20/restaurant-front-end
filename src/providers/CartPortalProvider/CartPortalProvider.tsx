import React, { PropsWithChildren, useState } from "react";
import { CartPortalContext } from "src/context";
export const CartPortalProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  return (
    <CartPortalContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartPortalContext.Provider>
  );
};
