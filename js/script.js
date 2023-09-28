"use strict";

console.log('arr' + " - object");
console.log(4 + "5");

let incr = 10,
    decr = 10;

incr++; //оператор инкремента(увеличение на еденицу)
decr--; //оператор декремента(уменьшение значение на еденицу)

console.log(++incr);
console.log(--decr);

console.log(65%30); //оператор  % возвращает остаток от диления двух чисел

console.log(2*4 == 8); // == для того чтобы что-то сравнить

const isChecked = true,
      isClose = false;

console.log(isChecked && isClose); // все агрументы должны быть true
console.log(isChecked || isClose); // хотябы один аргумент должен быть true
console.log(isChecked && !isClose); // ! оператор отрицания