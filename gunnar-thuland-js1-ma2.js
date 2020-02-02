//Question 1
var myFunctionExpression = function(){
  console.log("Gunnar Thuland")
};

myFunctionExpression();

//Question 2

  const selectButtonByClass = document.querySelector(".btn");

    const clickButton = function () {
        console.log("I was clicked")
    };

    selectButtonByClass.addEventListener("click", clickButton);

//Question 3
  const selectInputById = document.querySelector("#firstName");

    function valueOfKeyPress(event) {
        console.log(event.key);
    }

    selectInputById.addEventListener("keydown", valueOfKeyPress);

//Question 4

   const selectButtonByTag = document.querySelector("button");

    function addClassByHover() {
        selectButtonByTag.classList.add("hover");
    }

    selectButtonByTag.addEventListener("mouseover", addClassByHover);

//Question 5

//Question 6

    const animalList = document.querySelectorAll("li");

    for (let i = 0; i < animalList.length; i++) {
        animalList[i].addEventListener("mouseover", consoleLogAnimals);
    }

    function consoleLogAnimals(event) {
        console.log(event.target.dataset.animal);
    }
    
    //Question 7

 switch(animal){
       case "cat":
           console.log("Meow");
           break;

        case "cow":
            console.log("Moo");
            break;
        
        case "bird":
            console.log("Tweet");
            break;

        default:
           console.log("Harrumph");
   }
   
   //Question 8

 const sheep = ["Malcolm", "Anders", "Marie"];

    function logSheep(item) {
        console.log(item);
    }

    sheep.forEach(logSheep);

//Question 9

function helloLogger() {
  console.log("Hello!");

  if (counter === 5) {
    clearInterval(loggerDelay);
  }
  counter++;
}
let counter = 0;

const loggerDelay = setInterval(helloLogger, 500);


//Question 10

const divSelector = document.querySelector(".container");

    function updateDiv() {
        divSelector.innerHTML = "Text updated";
    }

    setTimeout(updateDiv, 2000);



