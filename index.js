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


const reverseString = reverse();
console.log(reverseString('yoyo mastery'));
//should return: 'yretsam oyoy'