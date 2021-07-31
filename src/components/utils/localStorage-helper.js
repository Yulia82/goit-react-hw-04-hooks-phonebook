export function writeData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error();
  }
}

export function readData(key) {
  try {
    const datalocalStorage = localStorage.getItem(key);
    return datalocalStorage ? JSON.parse(datalocalStorage) : null;
  } catch (error) {
    throw new Error();
  }
}
