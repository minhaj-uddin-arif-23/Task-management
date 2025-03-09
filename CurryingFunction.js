// * currying function  -> multiple function parameter can be breakdown and that can be more manageable i think 

//  arrow function
const addThreeSum = (a) => (b) => (c) => a + b + c
// console.log(addThreeSum(2)(5)(10))

function addTwoSum (a) {
  return function (b) {
    return a + b  
  }
}

const totalDiscount = (discount) => (amount) => amount - amount * discount

const withDiscount = totalDiscount(0.5)
console.log(withDiscount(100))
console.log(withDiscount(150))