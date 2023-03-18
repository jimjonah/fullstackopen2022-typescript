//Body Mass Index (BMI) is a person's weight in kilograms (or pounds) divided by the square of height in meters (or feet).


function calculateBmi(centimeters: number, kilograms: number): string {
  let meter = centimeters / 100;

  let bmi = kilograms / (meter * meter);
  console.log('bmi', bmi);

  if (bmi < 18.5) {
    return ('Underweight');
  } else if (bmi < 25) {
    return ('Normal (healthy weight)');
  } else if (bmi < 30) {
    return ('Overweight');
  } else {
    return ('Obese');
  }
}

console.log(calculateBmi(180, 55));
console.log(calculateBmi(180, 74));
console.log(calculateBmi(180, 84));
console.log(calculateBmi(180, 100));

