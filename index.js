// Ex 1
function test() {
  let a;
  console.log(a);
  console.log(foo());

  a = 1;
  function foo() {
    return 2;
  }
}

test();

/**
 * a is not defined because no value was assigned
 * 
 * 2 is what the function is asking to return
 */


// EX 2

let a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

const firstResult = someFunction(9);
const result = firstResult(2);

/**
 * result is a variable that calls a function, apparently it 5
 */