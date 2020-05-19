import http from "./httpServices";

const apiEndPoint = "http://localhost:3900/api/movies";

export function getProducts() {
  return http.get(apiEndPoint);
}

export function getProduct(productId) {
  return http.get(apiEndPoint + "/" + productId);
}

export function saveProduct(product) {
  if (product._id) {
    const body = { ...product };
    delete body._id;
    http.put(apiEndPoint + "/" + product._id, product);
  }
  return http.post(apiEndPoint, product);
}

export function deleteProduct(productId) {
  return http.delete(apiEndPoint + "/" + productId);
}
