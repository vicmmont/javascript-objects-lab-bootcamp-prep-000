const recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  const newObject = { ...object };
  newObject[key] = value;
  
  return newObject;
}