// Julian Fee Lab 8
//Test 1
//First thing function test
function firstThing(test) {
  console.log(test + ": This is the fist thing.<br>")
}
//second thing function test
function secondThing(test) {
  console.log(test + ": This is the second thing.<br>")
}
//third thing function test
function thirdThing(test) {
  console.log(test + ": This is the third thing.<br>")
}

firstThing("TEST 1");
secondThing("TEST 2");
thirdThing("TEST 3");

//test 2 - in order
setTimeout(function() {
  firstThing("TEST 2");
}, 0);

setTimeout(function() {
  secondThing("TEST 2");
}, 0);

setTimeout(function() {
  thirdThing("TEST 2");
}, 0);

//Test 3 - order is 2,3,1
setTimeout(function() {
  firstThing("TEST 3");
}, 3000);

setTimeout(function() {
  secondThing("TEST 3");
}, 1000);

setTimeout(function() {
  thirdThing("TEST 3");
}, 2000);
