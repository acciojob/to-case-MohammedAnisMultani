function toCase(text) {
 let ans = text.trim()
let string = ""
for(let i=0; i<text.length; i++){
  if(text.charAt(i) != " "){
    string += text.charAt(i);
  }
}
let str = ""
str = str + string.toLowerCase()
str = str + "-";
str= str + string.toUpperCase()

return str
}

// DO not change the code below

const text = prompt("Enter text:"); 
alert(toCase(text));  
