function insertionSort (array) {
  for(var i = 1;i<array.length;i++){
    if(array[i].value<array[i-1].value){
      var flag = true
      var mover = array[i];
      for(var j = i; j>=0; j--){
        if(j>0 && mover.value<array[j-1].value){
        array[j] = array[j-1]
        }
        else if(flag == true){
          flag = false;
          array[j] = mover;
        }
      }
    }
  }
  return array;
}

module.exports = {insertionSort}