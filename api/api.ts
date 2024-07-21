export async function getAllCategory() {
  const categoryRes = await fetch(
    "https://fakestoreapi.com/products/categories"
  );

  return categoryRes.json();
}

export async function getAllProduct() {
  const productsRes = await fetch("https://fakestoreapi.com/products");

  return productsRes.json();
}

export async function getSingleProduct(id: string) {
  const productRes = await fetch(`https://fakestoreapi.com/products/${id}`);

  return productRes.json();
}

export async function getSpecificCategory(category: string) {
  const categoryRes = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );

  return categoryRes.json();
}
