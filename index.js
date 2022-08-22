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