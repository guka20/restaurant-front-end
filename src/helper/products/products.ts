import { NewProductType } from "src/types/Types";
import { baseUrl } from "..";

export async function fetchProducts(category: string) {
  let query = category === "menu" ? "" : `?category=${category}`;
  console.log(baseUrl + "/product" + query);

  const res = await fetch(baseUrl + "/product" + query, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export async function createNewProduct(product: NewProductType) {
  const token = localStorage.getItem("token") || null;
  if (!token) {
    return null;
  }

  const res = await fetch(baseUrl + "/product/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(product),
  });
}
