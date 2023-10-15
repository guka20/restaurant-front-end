import { baseUrl } from "..";

export async function addNewCart(productId: string) {
  const token = localStorage.getItem("token") || null;
  if (!token) {
    return null;
  }
  const res = await fetch(baseUrl + "/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId }),
  });
  if (!res.ok) {
    throw new Error("Failed to add to cart");
  }

  return res.json();
}

export async function getAllCarts() {
  const token = localStorage.getItem("token") || null;
  if (!token) {
    return null;
  }
  const res = await fetch(baseUrl + "/cart/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}
