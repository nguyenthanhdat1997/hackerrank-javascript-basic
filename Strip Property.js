function stripProperty(obj, prop) {
  // write your code here
  const newObj = { ...obj };
  if (newObj.hasOwnProperty(prop)) {
    delete newObj[prop];
  }
  return newObj;
}