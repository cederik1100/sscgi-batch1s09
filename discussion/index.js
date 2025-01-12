/*
    Data Structures
        - used to organize and manage the data effectively 
        
    Arrays 
        - arrays are ordered collections of element or items that can hold multiple items
        - [] array literals
        - index/subscirpt
            - refers to the position of an element in an data structure
            -  indices are 0 based(index starts at 0)
    Mutator Methods
        - these are the functions that "mutate" or change an array after they are created
        - these methods manipulate the original array performing various tasks such as adding and removing elements
            - push()
                - adds an element to the end of an array and returns the array length
                
                - stack 
                    - last in first out data sturucture(LIFO)
                    - pile of plates    
                    - syntax: arrayName.push();
                    
            - pop()
                -  remove the last element in an array and returns the removed element
                - syntax: arrayName.pop();
            
            - shift()
                - removes an element at the beginning of an array and returns the removed element
                - queue - first in first out data structure(FIFO)
                - syntax: arrayName.shift();

*/ 
let person = {
    name: "Happy",
    age: 36,
    isSingle: true,
    height: 90
}
let myBasket = ['Happy', 36, true, -90];
console.log(myBasket);

console.log(person);
let beatles = ['John', 'Paul', 'George', 'Gringo'];
console.log('Curent array:');
console.log(beatles);

//push
let beatlesLength = beatles.push('Rob');
console.log(beatlesLength);
console.log('Mutated array from push method');
console.log(beatles);

// adding multiple elements to an array
beatles.push('Ken', 'Jedd');
console.log('Mutated array from push method');
console.log(beatles);

//pop
let removedMember = beatles.pop();
console.log(removedMember);
console.log('Mutated array from pop method');
console.log(removedMember);

//shift

let anotherMember = beatles.shift();
console.log(anotherMember);
console.log('Mutated array from shift method');
console.log(anotherMember);

// splice
/*
    - simultaneously removes element from a specified index number and add elements
    - syntax: arrayName.splice(startingIndex, deleteCount, elementToBeAdded);

*/

beatles.splice(1, 2, 'Jun', 'Mark');
console.log('Mutated array from splice method');
console.log(beatles);

// sort
/* 
    - rearranges the elements in alpanumeric order
    - syntax: arrayName.sort();
    
*/

beatles.sort();
console.log('Mutated array from sort method');
console.log(beatles);

// reverseUS
/*
    - reverses the order of the elements
    - syntax: arrayName.reverse();
  
*/

beatles.reverse();
console.log('Mutated array from reverse method');  
console.log(beatles);

// non mutator methods
/*
    Non mutator methods are function that do not modify of change an array after they are created
     - these medthods do not manipulate the original array performing various tasks such as returning elemtns from an array and combining arrays and printing the output

*/
let countries = ['US', 'PH', 'CAN', 'SG', 'JP', 'TH', 'FR', 'DE'];

//IndexOf()
/**
    - returns the indes number of the first mathcing element found in an array
    - if no match was found, the result will be -1
    - the search process will be done from the first element proceeding to the last element
    - syntax: arrayName.indexOf(searchValue);
              arrayName.indexOf(searchValue, fromIndex);
 */

console.log(countries);
let fistIndex = countries.indexOf('TH');
console.log('Result of indexOf method: ' + fistIndex);

let invalidCountry = countries.indexOf('BR');
console.log('Result of indexOf method: ' + invalidCountry);

//lastIndexOf()

/**
    - returns the index number of the last matching element found in an array
    - the search process will be done from last element proceding to the first element
    - syntax: arrayName.lastIndexOf(searchValue);
              arrayName.lastIndexOf(searchValue, fromIndex);
 */

//getting the index number starting from the last element

let lastIndex = countries.lastIndexOf('PH');
console.log(countries);
console.log('Result of lastIndexOf method: ' + lastIndex);

// getting the index number starting from a specific index
let lastIndexStart = countries.lastIndexOf('PH', 6);
console.log(countries);
console.log('Result of lastIndexOf method: ' + lastIndexStart);

//slice()

/**
    - portion/slice elements from an array and returns a new array
    - syntax:   arrayName.slice(startIndex);
                arrayName.slice(startIndex, endIndex);
 */

//slicing of elements from a specific index to the last element

let slicedArrayA = countries.slice(2);
console.log(countries);
console.log(`Result of slice method: ${slicedArrayA}`);

// slicing of elements from a specified index to another index

let slicedArrayB = countries.slice(1, 4);
console.log(countries);
console.log(`Result of slice method: ${slicedArrayB}`);

//slicing of elements starting from the last element of an array

let slicedArrayC = countries.slice(-3);
console.log(countries);
console.log(`Result of slice method: ${slicedArrayC}`);

//toString()

/**
    - returnns an array as a string seperated by commas
    - syntax: arrayName.toString();
 */

let stringArray = countries.toString();
console.log(countries);
console.log(`Result of toString method: ${stringArray}`);

let numString = [1, 2, 4, ];
console.log(numString);
console.log(`Result of toString method: ${numString.toString()}`);

//concat()

/*
    - combines two arrays and returns the combined result
    - syntax: arrayName.concat();
    - syntax: arrayName.concat(array1, array2);
*/

let taskArrayA = ['drink java, ', 'eat javascript, ' ];
let taskArrayB = ['inhale css, ', 'breath sass, '];
let taskArrayC = ['get git, ', 'be node'];

let tasks = taskArrayA.concat(taskArrayB);
console.log(`Result of tasks method: ${tasks}`);

let allTasks = taskArrayA.concat(taskArrayB, taskArrayC);
console.log(`Result of allTasks method: ${allTasks}`);

//combining arrays with elements

let combinedTasks = taskArrayA.concat('smell express', 'throw react')
console.log(`Result of combineTasks method: ${combinedTasks}`);

//join()

/*
    - returns an array as a string seperated by specified separator
    - syntax: arrayName.join();
    - syntax: arrayName.join('separatorString');
*/

let users = ['Nicole', 'Mark', 'Carl', 'Cedrick'];

console.log(users);
console.log(users.join());
console.log(users.join(' '));
console.log(users.join(' - '));

//itaration methods

/**
    - iteration methods are loops designd to perform repetative tasks on arrays
        - iteration method loops oeverall items in an array
        - useful for manipulating array data resulting in complex tasks
        - array iteration methods normally work with a function supplied as an argument
 */

//forEach()

/*
    - similar to for loop that iterates each array element 
    - for each item in the array the anonymous function passed in the forEach() method will be run 
    - the anonymous function is able  to received the current item being iterated or loop over by assigning a parameter
    - variable name for arryays are normally written in plural form of the data stored in an arry
    - forEach() does not return anything
    - syntax: arrayName.forEach(function(currentValue, index, array){});
*/

console.log('items displayed using forEach:')
// allTasks.forEach(function(task){
//     console.log(task);
// })

//using forEach with conditional statement
let filteredTasks = [];

/**
    - it is good practice to print the current element in the console when working with array iteration method to have an idea of what infirmation is being worked for each iteration of the loop
    - creating a separation variable to store results of array iteration methods are also good practice to avoid confusion by modifying the original arrat
 */

    allTasks.forEach(function(task){
        console.log(task);
        // if the element/string is length is greater than 10 characters
        if(task.length > 10){
            // add the element to the filteredTasks array
            filteredTasks.push(task);

        }
        
    })

    console.log(`result of filteredTasks: ${filteredTasks}`);


//map()

/**
    - iterates each element and returns new array with differend values depending on the result of the function's operation
    - this is useful for perfroming tasks where mutating/changing the element ar required 
    - unlike the forEach method,  the map method requires the use of a 'return' statement in order to create another array
    with the perform operation
    - syntax: let/const resultArray = arrayName.map(function(currentValue, index, array){});

 */

    let numbers = [1, 2, 3, 4, 5];

    let numberMap = numbers.map(function(number){
        return number * number;
    })

    console.log(`original array: ${numbers}`);
    console.log(`result of numberMap: ${numberMap}`);

    let numberForEach = numbers.forEach(function(number){
        return number * number;
    });

    console.log(`result of the each method: ${numberForEach}`);

    //forEach(), looop overall items in the arrays as does map(), but forEach() does not return a new array

    //every()
    /*
        - check if all elements in an array meet the given condition
        - this is useful for validating data stored in an arrays especially when dealing with large amounts of data
        - returns a true value if all elements meet the condition
        and flase if other wise
        - syntax: let/const resultArray = arrayName.every(function(currentValue, index, array){
         return condition;
        });
    */

let allValid = numbers.every(function(number){
    return (number < 3 );
});

console.log(`result of allValid method: ${allValid}`);


//some()

/*
    - check if at least one element in the array meets the given condition
    - returns a true value if at least one element meets the condition and false if otherwise
    - syntax: let/const resultArray = arrayName.some(function(currentValue, index, array){
        return condition;
    });
*/

let someValid = numbers.some(function(number){
    return (number < 3);
});

console.log(`result of someValid method: ${someValid}`);

//combine the returned result from the every/some method may use other statements to perform consecutive results
if(someValid){
    console.log('At least one element is less than 2');
}

//filter()

/*
    - returns new array that contains elements which meets the give condtion
    - returns an empty array if no elements were found
    - useful for filtering array elements with a given condtion and shorten the syntax compared to using other array iteration methods
    - syntax: let/const resultArray = arrayName.filter(function(currentValue, index, array){
        return condition;
    });
*/

let filterValid =  numbers.filter(function(number){
    return (number < 3);
});

console.log(`result of filterValid method: ${filterValid}`);

// no elemetns found

let nothingFound = numbers.filter(function(number){
    return (number = 0);
});

console.log(`result of nothingFound method: ${nothingFound}`);


//filtering using forEach()

let filteredNumbers = [];

numbers.forEach(function(number){
    if (number < 3){
        filteredNumbers.push(number);
    }
})

console.log(`result of filteredNumbers method: ${filteredNumbers}`);


let products = ['Mouse', 'Keyboard', 'Monitor', 'AVR'];

//include()
/**
    - include() method checks if the arguement passed can be found in the array
    - it returns boolean which can be saved in a variable
    - returns true if the arguement is found in the array
    - returns falsle if it is not found
    - syntax:  arrayName.include(<arguementToFound>);
 */

let productFound1 = products.includes('Mouse');
console.log(productFound1);//returns true

let productFound2 = products.includes('Headset');
console.log(productFound2);//returns false

/**
    - method can be 'chained' using them one after another
    - the result of the first method method is used on the second method until all 'chained' methods have been resolve
    - how chaining resolves in our example:
        1. the 'products' element will be converted into all lowercase
        2. the resulting lowercase string is used in the 'includes' method
 */

// let filteredProducts = products.map(product => 
//     product.toLowerCase()).filter(product =>
//         product.includes('a')
// );
// let filteredProduct = products.filter(function(product){
//     return product.toLowerCase().includes('a');
// });

filteredProducts = products.filter(product => 
    product.toLowerCase().includes('a'));

console.log(filteredProducts.map(product => product.toLowerCase()));


// reduce()

/**
    - it evaluates the element from the left to right an returns/reduce the array into a single value
    - syntax: let/const resultArray = arrayName.reduce(function(accumulator, currentValue, index, array){
        return expression;
    })
    
    - accumulator parameter in the function stores the result to every iteration of the loop
    - the currentValue is the current/next element in the array that is evaluated in each iteration of the loop
    - how the reduce method works:
        1. the first/result element in the array is stored in the accumulator parameter
        2. the second/next elelement in the array is stored in the currentValue parameter
        3. an operation is performed in the two elements
        4. the loop repeats step 1-3 until all elements have been worked on

*/

let iteration = 0;
let reduceArray =  numbers.reduce(function(x, y){
    //use to track the current iteration count and accumulator/currentValue data
    console.log('current iteration ' + ++iteration);
    console.log('accumulator: ' + x);
    console.log('currentValue: ' + y);

    //the operation to reduce the array into a single value
    return x + y;

})

console.log(`result of reduceArray method: ${reduceArray}`);

// reducing string arrays

let list = ['Hello', 'Again', 'Love'];

let reduceJoin = list.reduce(function(x, y){
    return x + ' ' + y;
})

console.log(`result of reduceJoin method: ${reduceJoin}`);

//activity
/*
    apply in pokemon:
    - match bracketing 
    - first three (round robin)
    - prompt

 */







