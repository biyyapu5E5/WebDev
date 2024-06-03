// For loop 
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let txt = "";
for(let i=0;i<cars.length;i++)
{
    txt+= cars[i]+"<br>";  
}
document.getElementById("forLoop").innerHTML = txt;




// For/in Loop 
const person = {fname:"John", lname:"Doe", age:25};
let s = ''
for (const key in person) {
    s += key+": "+person[key]+"<br>";  
}
document.getElementById('for/in').innerHTML = s;




// for/of Loop
const cars1 = ["BMW", "Volvo", "Mini"];
let newString = ''
for(let i of cars1) 
{
    newString+=i+"<br>";
}

const cars2 = "Biyyapu";
let newString1 = ''
for(let i of cars2) 
{
    newString1+=i+"<br>";
}

document.getElementById('for/of').innerHTML = newString+newString1;



//ForEach Loop 
// Note that the function takes 3 arguments:
// The item value
// The item index
// The array itself
const numbers = [45, 4, 9, 16, 25];

let text1 = "";
let text2 = '';
let text3 = '';
let text4 = '';
numbers.forEach(myFunction);

function myFunction(value, index, array) 
{
    //This 
    text1+= "Value : " + value + " Index : "+index+" Array : "+array+"<br>";
    // or This
    text2+= "Value : " + value + " Index : "+index+" Array : "+`[${array}]`+"<br>";
    // or This
    text3+= `Value :   ${value}    Index :  ${index} Array :  [${array}] <br>`;

}

numbers.forEach(function fun(values){
    text4+= `Values :   ${values} <br>`;
})
document.getElementById('forEachLoop').innerHTML = text1+"<br>"+text2+"<br>"+text3+"<br>"+text4;


