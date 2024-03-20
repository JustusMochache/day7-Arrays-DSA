 const characterArray = ["a" ,"b","c"];
 const numsArray = [13,23,3,4];
 //const splitted = numsArray.map(num => num.lengt)
 
 const stringArray = numsArray.toString();
 function countTotalCharacters(stringArray){
    // 1. initalize a couter
    // 2. loop
    // 3. update our counter in the loop
    // 4. return the total character count
    let totalCharacters = 0;
    for (const i of stringArray) {
        //totalCharacters = totalCharacters + i.length;
        totalCharacters += i.length;    
    }
    return totalCharacters;
 }
 const countChars = countTotalCharacters(stringArray);
 console.log(countChars);
