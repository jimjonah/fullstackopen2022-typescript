//Body Mass Index (BMI) is a person's weight in kilograms (or pounds) divided by the square of height in meters (or feet).


interface CalcNumbers {
  height: number;
  weight: number;
}

const parseArguments = (args: string[]): CalcNumbers => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

function calculateBmi(centimeters: number, kilograms: number): string {
  let meter = centimeters / 100;

  let bmi = kilograms / (meter * meter);
  // console.log('bmi', bmi);

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

// console.log(calculateBmi(180, 55));
// console.log(calculateBmi(180, 74));
// console.log(calculateBmi(180, 84));
// console.log(calculateBmi(180, 100));

try {
  const { height, weight } = parseArguments(process.argv);
  console.log(calculateBmi(height, weight));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}

// npm run calculateBmi 180 100
// npm run calculateBmi 180 84
// npm run calculateBmi 180 74
// npm run calculateBmi 180 55


export default calculateBmi;
