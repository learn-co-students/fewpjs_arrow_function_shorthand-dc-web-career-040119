// escribe("index.js", () => {
//   it("has a functional expression called divide", () => {
//     expect(divide).to.exist
//   })


// const nums = [1,2,3];
// const squares = nums.map(x => x ** 2); //=> [1,4,9]
// const doubles = nums.map(x => x * 2); //=> [2,4,6]


let divide = () => 2000 / 100;
//
//   it("divide divides 2000 by 100", () => {
//     expect(divide()).to.equal(20)
//   })
//
//   it("has an arrow function called square", () => {
//     expect(square).to.exist
//   })
//
let square = x => x**2;

//   it("square arrow function multiplies a number times itself", () => {
//     let x = 2
//     expect(square(x)).to.equal(4)
//   })
//
//   it("has an arrow function called add", () => {
//     expect(add).to.exist
//   })

let add = (x, y) => x + y;
//
//   it("add arrow function takes two parameters and adds them together", () => {
//     let a = 3
//     let b = 4
//     expect(add(a,b)).to.equal(a+b)
//   })
// })
