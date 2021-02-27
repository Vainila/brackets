module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let ops = [];
  let ends = [];
  for(let i = 0; i< bracketsConfig.length; i++){
    ops.push(bracketsConfig[i][0]);
    ends.push(bracketsConfig[i][1]);
  }

  for(let symbol of str){
    if(ops.includes(symbol) && ends.includes(symbol)){
        if(stack[stack.length-1]==symbol){
          stack.pop();
        }
        else{
          stack.push(symbol);
        }
    }
    else if (ops.includes(symbol)){
      stack.push(symbol);
    }
    else{
      if(stack[stack.length-1]==ops[ends.findIndex(cur => cur === symbol)]){
        stack.pop();
      }else{
        return false;
      }
    }
  }
  return stack.length==0;
}
