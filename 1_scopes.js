var a = 'a';
b = 'b';

console.log('1: a = ' + a + ', b = ' + b);

{
  a = 'a1';
  b = 'b1';

  console.log('2: a = ' + a + ', b = ' + b);
}

console.log('3: a = ' + a + ', b = ' + b);

(function() {
  console.log('4: a = ' + a + ', b = ' + b);

  var a = 'a2';
  b = 'b2';

  console.log('5: a = ' + a + ', b = ' + b);
})();

console.log('6: a = ' + a + ', b = ' + b);
