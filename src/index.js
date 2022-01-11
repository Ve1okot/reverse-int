module.exports = function reverse (n) {
  let str = Math.abs(n).toString();
  let reversed = '';
  for (i = 0; i < str.length; i++) {
    reversed = `${str[i]}${reversed}`
  } 
  return reversed	
}
