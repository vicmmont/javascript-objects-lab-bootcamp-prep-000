const recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  const newObject = Object.assign({}, object);
  newObject[key] = value;
  
  return newObject;
}

function