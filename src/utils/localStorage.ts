const get = (key: string) => {
  const value = window.localStorage.getItem(key);
  return value === null ? value : JSON.parse(value);
};

const set = (key: string, value: any) => {
  return window.localStorage.setItem(key, JSON.stringify(value));
};

const remove = (key: string) => {
  return window.localStorage.removeItem(key);
};

const localStorage = {
  get,
  set,
  remove,
};

export default localStorage;
