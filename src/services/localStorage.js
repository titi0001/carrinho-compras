const checkIfExists = (item) => {
  const getItem = JSON.parse(localStorage.getItem('products'));
  const foundItem = getItem.findIndex(({ id }) => id === item.id);
  const noNegative = -1;
  if (foundItem !== noNegative) {
    getItem[foundItem].quantity += 1;
  } else {
    getItem.push(item);
  }
  return getItem;
};

const addToLocalStorage = (dataObj) => {
  if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify([dataObj]));
  } else {
    const returnedArray = checkIfExists(dataObj);
    localStorage.setItem('products', JSON.stringify(returnedArray));
  }
};

export const addComment = (coment, id) => {
  if (!localStorage.getItem(id)) {
    localStorage.setItem(id, JSON.stringify([coment]));
  } else {
    const returnComment = JSON.parse(localStorage.getItem(id));
    const newComment = [...returnComment, coment];

    localStorage.setItem(id, JSON.stringify(newComment));
  }
};

export default addToLocalStorage;
