//A function that accepts an array as an argument and prints the contents of the array in reverse order, one item at a time, without modifying the existing array.

var arrayOfColors = ["red", "blue", "pink", "brown", "black", "green", "yellow", "orange"];

function reverseArray(array){
    var reversedArr = array.reverse();
    for(var i = 0; i < reversedArr.length; i++){
        console.log(reversedArr[i]);
    }    
}