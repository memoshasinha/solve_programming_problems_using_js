//'use strict';
function indirectTest() {
  console.log(this.a);
}
var a = 2;
var obj = {
    a: 3, 
    indirectTest: indirectTest
};
var anotherObject = {
    a: 4
};

obj.indirectTest();
//(obj.indirectTest = anotherObject.indirectTest)();

anotherObject.indirectTest = obj.indirectTest;
indirectTest();
//(anotherObject.indirectTest = obj.indirectTest)();
