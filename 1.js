function concatArrays(arr1, arr2) {
    
  
  return [...arr1, ...arr2.filter(item => !arr1.includes(item))];
  }
  
  console.log(concatArrays([1, 2, 3], [3, 4, 5])); 