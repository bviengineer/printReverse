//A function that accepts an array as an argument and prints the contents of the array in reverse order, one item at a time, without modifying the existing array.


//This code uses the reverse() method to reverse the array but it also changes the original array and does not preserve the original order of the content
var arrayOfColors = ["red", "blue", "pink", "brown", "black", "green", "yellow", "orange"];
function reverseArray(array){
    var reversedArr = array.reverse();
    for(var i = 0; i < reversedArr.length; i++){
        console.log(reversedArr[i]);
    }    
}


//This code does not reverse the order of the original array and prints the array in reverse order by printing each item the array beginning at the end of the array
var arrayOfColors = ["red", "blue", "pink", "brown", "black", "green", "yellow", "orange"];

function reverseArry(array){
    for(var i = array.length-1; i >= 0; i--){
        console.log(array[i]);
    }
}