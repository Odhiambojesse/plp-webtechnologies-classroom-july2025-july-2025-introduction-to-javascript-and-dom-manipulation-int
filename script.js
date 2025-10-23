let name = "Viktor Gyokeres";
         console.log("Hello, " + "my name is "  + name);
         let age = 26;
         const birthYear = 1999
         let height = 1.85; // in meters
         console.log("I am  " + age + "years old meaning I was born in " + birthYear + " and I am  " + height + "m tall.");

//This is the beginnig of understanding functions in js
function greet(){
    console.log("Welcome to my JavaScript assignment!");    
}
greet();

const hello = function (){
    console.log("This is a message using a functon expression");
}
hello();

const byebye = () => console.log("This is a message using an arrow function");
byebye();

//DOM manipulation example
function changeText(){
    let title = document.getElementById("title");
    title.textContent = "Aaah the text really changes!";
    title.style.color = "blue";
    letnewDiv = document.createElement("div");
    newDiv.textContent = "This is a new div added to the DOM!";
    document.body.appendChild(newDiv);
}

//loop examples
for (let i = 0; i < 5; i++) {
    console.log("The number is " + i);
}

let i = 0;
while (i < 5) {
    console.log("While loop number: " + i);
    i++;
}