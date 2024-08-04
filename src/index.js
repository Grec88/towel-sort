
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = '';
  if(JSON.stringify(matrix) !== JSON.stringify([]) && matrix){
    for(i = 0; i < matrix.length; i++){
      if(i % 2 !== 0){
        matrix[i].reverse();
      }
      res += matrix[i].join(',');
      res += i !== matrix.length - 1 ? ',' : '';
    }
    res = res.split(',');
  }
  else{
    res = [];
  }
  return res;
}
