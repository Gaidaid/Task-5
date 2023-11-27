let arr = Array.from(Array(10)) 
arr = arr.map( 
    (i) => 
    Math.round(Math.random() * 100) 
) 
console.log(arr) 
 
let min = arr[0] 
 
for (let i = 1; i < arr.length; i++) { 
 
    numer = arr[i] 
         if (numer < min) { 
 
        min = numer 
         } 
 
 
} 
 
console.log('Мінімальне число ', min)