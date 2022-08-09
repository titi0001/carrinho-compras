export async function getCategories() {
  try {
    const url = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return 'API Falhou!';
  }
}

export async function getProductDetails(id) {
  try {
    const itemDetails = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await itemDetails.json();
    return data;
  } catch (error) {
    return 'API Falhou!!!';
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
export async function getProductsFromCategory(categoryId) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
export async function getProductsFromQuery(query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
