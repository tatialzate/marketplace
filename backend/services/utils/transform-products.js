export function transformProducts(products) {
  if (!Array.isArray(products)) return [];
  return products.map(product => ({
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category?.name,
    image: Array.isArray(product.images) ? product.images[0] : undefined
  }));
}
