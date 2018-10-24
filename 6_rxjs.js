
  import { of } from 'rxjs';
  //import 'rxjs/add/operator/???';
  import 'rxjs/add/operator/merge';

  const numbers = of(1, 2, 3, 4, 5);
  const fruits = of('apple', 'orange', 'peach');

  numbers.merge(fruits)
    .subscribe(console.log);


  // odd numbers
  // only first 3 numbers
  // numbers then fruits
  // number & fruit ([1, 'apple'], [2, 'orange'], ...)
  // number x fruit ('apple', 'orange', 'orange', 'peach', 'peach', 'peach', ...)
