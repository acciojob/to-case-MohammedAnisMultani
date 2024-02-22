function toCase(text) {

text = text.trim()
let str = ""
str = str + text.toLowerCase()
str = str + "-";
str= str + text.toUpperCase()

return str
}

// DO not change the code below

const text = prompt("Enter text:"); 
alert(toCase(text));  
