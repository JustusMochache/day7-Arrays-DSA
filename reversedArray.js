
//

function reversedArray(array){
     let leftPointer = 1;

     let rightPointer = array.length - 1;

     while (leftPointer < rightPointer) {
       let temporaryPointer = array[leftPointer];

       array[leftPointer] = array[rightPointer]
       array[rightPointer] = temporaryPointer;
       leftPointer++;
       rightPointer--;

     }

    return array;
}

const numbersArray = [2,5,6,8,9];
const reversed = reversedArray(numbersArray);
console.log(reversed);

