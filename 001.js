function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return console.log("Bukan Palindrome");
   }
 }
 return console.log("Palindrome");
}

palindrome("ibu ratna antar ubi");
palindrome("kasur ini rusak");
palindrome("A nut for a jar of tuna.");
palindrome("Borrow or rob?");
palindrome("Was it a car or a cat I saw?");
palindrome("Yo, banana boy!");
palindrome("UFO tofu?");