const addToLocalStorage = (key, dataObj) => {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, JSON.stringify([dataObj]));
  } else {
    localStorage.setItem(
      key,
      JSON.stringify([...JSON.parse(localStorage.getItem(key)), dataObj,
      ]),
    );
  }
};

export default addToLocalStorage;
