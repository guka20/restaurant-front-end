import { baseUrl } from "..";

export async function addNewCart(productId: string) {
  const res = await fetch(baseUrl + "/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });
  return res;
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
