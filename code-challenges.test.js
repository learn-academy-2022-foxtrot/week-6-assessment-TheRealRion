// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//Template  Red --> Green --> Refactor : 
// describe("funcName", () => {
//     it("", () => {
//       expect(funcName(input)).toEqual(output)
//     })
//   })

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

  // describe("sentenceIt", () => {
  //   it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
  //       const people = [
  //         { name: "ford prefect", occupation: "a hitchhiker" },
  //         { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  //         { name: "arthur dent", occupation: "a radio employee" }
  //       ]
  //         // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

  // expect(sentenceIt(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  //   })
  // })

//Ran $ yarn jest to ensure "red" test
//Code fail-yay! 
// ReferenceError: sentenceIt is not defined

// b) Create the function that makes the test pass.

//PsudoCode




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

  describe("justRemain", () => {
    it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
      const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
      // Expected output: [ 2, 0, -1, 0 ]
      const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
      // Expected output: [ 2, 1, -1 ]

  expect(justRemain(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  expect(justRemain(hodgepodge2)).toEqual([ 2, 1, -1 ])
    })
  })

//Ran $ yarn jest to ensure "red" test
//Code fail-yay! 
// ReferenceError: justRemain is not defined

// b) Create the function that makes the test pass.

//PsudoCode
  //1. create a function (justRemain)
  //2. that takes in mixed arr (one peramiter=> arr)
    //3. if number 
      //4. divides 3
      //5. push remainder to arr
    //6. return new arr w/ just remainders 

    const justRemain = (arr) => {
      temparr = []
      arr.map((val) => {
          if (typeof val === "number") {
              temparr.push(val % 3)
          }
          console.log(temparr)
      })
      
          return temparr
      }



//Passed on first try-yay! :) 


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubeIt", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
      const cubeAndSum1 = [2, 3, 4]
      // Expected output: 99
      const cubeAndSum2 = [0, 5, 10]
      // Expected output: 1125

expect(cubeIt(cubeAndSum1)).toEqual(99)
expect(cubeIt(cubeAndSum2)).toEqual(1125)
  })
})

//Ran $ yarn jest to ensure "red" test
//Code fail-yay! 
// ReferenceError: cubeIt is not defined

// b) Create the function that makes the test pass.


//PsudoCode
//1. create a function (cubeIt)
//2. that takes in arr (one peramiter=> arr)
//3. iterate over each index of arr (.forEach)
//4. cubes each number (cube=math.pow)
//5. pushes to new arr and adds to previous sum (sum+cube) and makes sure it is an integer (parseInt)
//6 return final sum (return sum)

const cubeIt = (arr) => {
  sum = [ ]
  arr.forEach((num) => {
      cube = Math.pow(num, 3)
      sum = parseInt(sum + cube)
  })
  return sum
}

//at first, I was struggling as to why my numbers were not adding, but concating. Once I realized they were being treated as a string not numbers, I added parseInt() to force them to stay & be read as numbers. 