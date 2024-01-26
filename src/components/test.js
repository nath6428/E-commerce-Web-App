const myObject = {
    existingKey: 'existingValue'
  };
  
  const dynamicKey = {'newKey': 3};
  
  // Adding a new key-value pair with a dynamic key
  myObject[dynamicKey] = 'newValue';
  
  console.log(myObject);
  // Output: { existingKey: 'existingValue', newKey: 'newValue' }
   