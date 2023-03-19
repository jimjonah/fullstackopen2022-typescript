//Body Mass Index (BMI) is a person's weight in kilograms (or pounds) divided by the square of height in meters (or feet).


interface CalcNumbers {
  height: number;
  weight: number;
}

const validQueryParams = (args: string[]): CalcNumbers => {
  // console.log(args, args.length);
  if (args.length < 2) throw new Error('Not enough arguments');
  if (args.length > 2) throw new Error('Too many arguments');

  if (!isNaN(Number(args[0])) && !isNaN(Number(args[1]))) {
    return {
      height: Number(args[0]),
      weight: Number(args[1])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

function calculateBmiForWeb(centimeters: number, kilograms: number): string {
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



// npm run calculateBmi 180 100
// npm run calculateBmi 180 84
// npm run calculateBmi 180 74
// npm run calculateBmi 180 55

const calculateBmiService = {
  validQueryParams:validQueryParams,
  calculateBmi:calculateBmiForWeb,
}


export default calculateBmiService;
