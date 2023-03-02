//Implement a function that reverses a string using iteration...and then recursion!

//Recursive Approach
function reverse(str) {
  var ans = "";
  return function rev(str) {
    if(str.length < 1) {
      return ans;
    }
    ans += str.charAt(str.length - 1);
    return rev(str.substring(0, str.length - 1));
  }
}

//Iterative Approach
function reverseIterative(str) {
  var ans = "";
  for(let i = str.length - 1; i >= 0; i--) {
    ans += str.charAt(i);
  } 
  return ans;
}


const reverseString = reverse();
console.log("Recursive: ", reverseString('yoyo mastery'));
console.log("Iterative: ", reverseIterative('yoyo mastery'));
//should return: 'yretsam oyoy'