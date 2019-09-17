//designed and developed 
//    by Soravath Mengseng

var fruitImg = ["Dragon-fruits", "Grapes","Kiwi", "Lemon", "Orange", "Passion-fruit", "Pear", "Pomegranate", "Star-fruit", "Watermelon"];

var fruitArray = ["Dragon-fruits", "Grapes","Kiwi", "Lemon", "Orange", "Passion-fruit", "Pear", "Pomegranate", "Star-fruit", "Watermelon"];

var fruitsPool = [
    "Strawberry", 
    "Papaya", 
    "Pineapples", 
    "Avocado", 
    "Tamarind", 
    "Gooseberries",
    "Kumquat",
    "Rambuton",
    "Purple mangosteen", 
    "Apricot", 
    "Kumquat", 
    "Durian", 
    "Apple", 
    "Cantaloupe", 
    "lychee", 
    "Sugar-apple",
    "Banana",
    "Persimmon",
    "Pomelo",
];

var MultipleChoice = [];    
var Img = document.getElementById("Img");
var message = document.getElementById("message");
var resetBtn = document.querySelector("#resetBtn");
var choice = document.querySelectorAll(".choice");


init();



resetBtn.addEventListener("click", function(){
    MultipleChoice.length = 0; // clear MultipleChoicearry
    var ranNum = ranZerotoTen();
    Img.src=  fruitImg[ranNum]+ ".png";
    MultipleChoice.push(fruitArray[ranNum]);

    message.textContent= "";
    resetBtn.textContent ="New Game";
    ranPickedPool();
    shuffle(MultipleChoice); 
    
    for (var i = 0; i < choice.length; i++){
           //display choice    
           choice[i].textContent = MultipleChoice[i];

           //check the Answer
           choice[i].addEventListener("click", function(){

               var pickedAnswer = this.textContent;
               var correctAnswer = fruitArray[ranNum];
               if (pickedAnswer === correctAnswer){
                   message.textContent= "Correct";
                   resetBtn.textContent ="New Game";
                   Img.src= fruitImg[ranNum]+ ".png";
               }else{
                   resetBtn.textContent ="Play Again?";
                   message.textContent= "wrong!";
//                   Img.src=  "Sad.png";
               }


           });

        }
    console.log(MultipleChoice);
    
});




function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);         
// Decrease ctr by 1
        ctr--;         
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
//        console.log(myArray);
    }
    return arra1;
}

function init(){
    var ranNum = ranZerotoTen();
    Img.src=  fruitImg[ranNum]+ ".png";
    MultipleChoice.push(fruitArray[ranNum]);

    message.textContent= "";
    ranPickedPool();
    shuffle(MultipleChoice);  


    for (var i = 0; i < choice.length; i++){
           //display choice    
           choice[i].textContent = MultipleChoice[i];

           //check the Answer
           choice[i].addEventListener("click", function(){

               var pickedAnswer = this.textContent;
               var correctAnswer = fruitArray[ranNum];
               if (pickedAnswer === correctAnswer){
                   message.textContent= "Correct";
                   resetBtn.textContent ="New Game";
               }else{
                   resetBtn.textContent ="Play Again?";
                   message.textContent= "wrong!";
                   Img.src="Sad.png";
               }


           });

        }
    
    console.log(MultipleChoice);

}

// generate random number between 0 to 10
function ranZerotoTen(){    
     return Math.floor((Math.random() * 10));
}

//randomly pick 3 fruit from its pool
function ranPickedPool(){
   for( var k = 0; k < 3 ; k++){    
    //generate random number from 0 to 19
   var Poolnum = Math.floor((Math.random() * 19));
   MultipleChoice.push(fruitsPool[Poolnum]);   
   } 
}





