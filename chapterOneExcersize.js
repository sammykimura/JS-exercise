console.log("QUESTION ONE: ");

let num1=Number(prompt("Enter a number"));
let num2=Number(prompt("Enter another number"));

if(num1>num2){
  console.log("Number one is larger");
}

if(num2>num1){
  console.log("Number two is larger");
}


console.log("QUESTION TWO: ");




for (let i = 0; i <=100; i++){


  if(i%3==0){
    console.log("buzz");
  }
  if(i%5==0 && i%3!=3){
    console.log("fizz");
  }
  else{
    console.log(i);
  }
}


console.log("QUESTION THREE: ");


let firstName=String(prompt("Enter your first name"));

let lastName=String(prompt("Enter your last name"));

function sayHello(firstName, lastName){
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

let sentence=sayHello(firstName, lastName);

console.log(sentence);
