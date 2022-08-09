const addToLocalStorage = (dataObj) => {
  if (localStorage.getItem('products') === null) {
    localStorage.setItem('products', JSON.stringify([dataObj]));
  } else {
    localStorage.setItem(
      'products',
      JSON.stringify([...JSON.parse(localStorage.getItem('products')), dataObj,
      ]),
    );
  }
};

export default addToLocalStorage;
