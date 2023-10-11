import { baseUrl } from "..";

export async function fetchProducts() {
  const res = await fetch(baseUrl + "/product", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}
