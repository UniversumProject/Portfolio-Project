const getLocalStorage = (name) => {
  let item = localStorage.getItem(name);
  if (item) {
    return JSON.parse(localStorage.getItem(name));
  } else {
    return { firstName: '', lastName: '', email: '', message: '' };
  }
};
const setLocalStorage = (name, obj) => {
  localStorage.setItem(name, JSON.stringify(obj));
};

export { getLocalStorage, setLocalStorage };
