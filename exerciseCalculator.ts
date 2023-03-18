
interface TrainingValues {
  trainingData: Array<number>;
  targetValue: number;
}


const parseArguments = (args: string[]): TrainingValues => {
  if (args.length < 3) throw new Error('Not enough arguments');

  let trainingData = [];
  for (let i = 2; i < args.length; i++) {
    // console.log('args[i]', args[i]);
    // console.log('!isNaN(Number(args[i])', !isNaN(Number(args[i])));

    if (!isNaN(Number(args[i]))) {
      trainingData.push(Number(args[i]));
    } else {
      throw new Error('Provided values were not numbers!');
    }
  }

  return {
    trainingData: trainingData,
    targetValue: trainingData[trainingData.length - 1]
  }
}

interface TrainingResult {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}


const calculateExercises = (trainingData: Array<number>, targetHours: number): TrainingResult => {
  let trainingDays = 0;
  let averageHours = 0;
  let totalHours = 0;

  trainingData.forEach((val) => {
    if (val !== 0) {
      trainingDays++;
      totalHours += val;
      averageHours = totalHours / trainingDays;
    }
  });

  // if beat the target and exercised > median days then rating is 3
  // if exercise days median days but average hours is slightly below target then 2
  // otherwise 1

  let averageExerciseDays = trainingDays / trainingData.length;
  console.log('averageExerciseDays', averageExerciseDays);
  let rating = 1;
  let message = 'Let\'s step it up a bit!';

  if (averageExerciseDays >= .5 && averageHours > targetHours) {
    rating = 3;
    message = 'Awesome! Keep it up!';
  } else if (averageExerciseDays >= .5 && averageHours < targetHours ||
    averageExerciseDays < .5 && averageHours > targetHours) {
    rating = 2;
    message = 'not too bad but could be better';
  }

  return {
    periodLength: trainingData.length,
    trainingDays: trainingDays,
    success: averageHours > targetHours,
    rating: rating,
    ratingDescription: message,
    target: targetHours,
    average: averageHours
  };
}

//
// console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
// console.log(calculateExercises([1.5, 0, 2, 2.1, 0, 1.4, 1], 2));
// console.log(calculateExercises([4.5, 0, 0, 5.1, 0, 1.4, 0], 2));
// console.log(calculateExercises([1.5, 0, 0, 2.1, 0, 1.4, 0], 2));

try {
  const { trainingData, targetValue } = parseArguments(process.argv);
  console.log(calculateExercises(trainingData, targetValue));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}

// npm run calculateExercises 3 0 2 4.5 0 3 1 2
// npm run calculateExercises 1.5 0 2 2.1 0 1.4 1 2
// npm run calculateExercises 4.5 0 0 5.1 0 1.4 0 2
// npm run calculateExercises 1.5 0 0 2.1 0 1.4 0 0 2

export default calculateExercises;
