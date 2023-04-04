// // Write a function that accepts an array of strings and console.logs each element using a for loop.
let arr = ["Masiani", "Valarie", "Rusina", "Becky", "Faith", "String"];
word(arr)
function word(nam){
   
        for (r = 0; r< nam.length; r++) {
         console.log(nam[r]);
      }
    }
  
    //  Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
 function  numbers(){ 
    let Array = [1, 11, 7, 3, 8, ];
       function multiplying(Array){
        console.log(Array*2)
    }
    Array.forEach(multiplying)
         
 } 
 numbers();    
//   Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values.
function Arraynum1(nums){

    let emptyArray = [];
    for (let a=0;a< nums.length; a++){ 
    if (a<4){
        emptyArray.push(nums[a]*8);
    
    }
    else if (a>=nums.length-2){
        emptyArray.push(nums[a]+5);
    }
 }
 console.log(emptyArray);

}
let num1 = [12,5,10,15,3,6];
console.log(Arraynum1(num1));

// Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
 numbers(arrNum);
function numbers(arrayof){
    let m =0;
    while(m <arrayof.length){
        if (arrayof[m]===arrayof[4]){
            break;
        }
        console.log(arrayof[m]);
        m++;
    }
}

// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index

let fruits= ['apple','plum','banana','strawberries','kiwi'];
juice(fruits)

function juice(arr){ 
for (let f=0; f<arr.length; f++){
    if (f===2){
        continue;

        }
        console.log({"continue":arr[f]});
    }
 }



