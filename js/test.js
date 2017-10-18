function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for (x=0; x<arr1; x++){
    a=arr1[x];
    for (i=0; i<arr2; i++){
      b=arr2[b];
      if (b != x){
        newArr.push(x);
      }
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
