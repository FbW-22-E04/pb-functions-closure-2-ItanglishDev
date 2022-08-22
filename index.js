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


// EX 3

let fullname = 'John Doe';
const obj = {
  fullname: 'Colin Ihrig',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function () {
      return this.fullname;
    }
  }
};

console.log(obj.prop.getFullname());// here it calls a function inside the object

const test2 = obj.prop.getFullname;

console.log(test2());//here it calls a function that is not being used

