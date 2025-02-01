import api from "./api";

export async function fetchProducts() {
  const { data } = await api.get("/products");
  return data;
}

export async function fetchProductById(id) {
  const { data } = await api.get(`/products/${id}`);
  return data;
}
