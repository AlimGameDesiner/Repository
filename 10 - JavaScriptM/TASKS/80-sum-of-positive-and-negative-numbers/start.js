/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Создайте функцию "sumPositiveNegative" здесь
const sumPositiveNegative = (nums) => {
  const positive = nums.filter(posNumber => posNumber >= 0);
  const negative = nums.filter(negNumber => negNumber < 0);
  const positiveSum = positive.reduce((sumSoFar, current) => sumSoFar + current, 0);
  const negativeSum = negative.reduce((sumSoFar, current) => sumSoFar + current, 0);
  return {
    positive: positiveSum,
    negative: negativeSum,
  };
};

const result = sumPositiveNegative(nums);

console.log(result);
// { positive: 74, negative: -54 }
