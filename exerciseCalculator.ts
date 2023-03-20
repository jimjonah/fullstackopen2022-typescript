

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
  if(typeof targetHours === 'undefined' || typeof trainingData === 'undefined'){
    throw new Error('parameters missing');
  }
  if(isNaN(targetHours)){
    throw new Error('malformatted parameters');
  }


  let trainingDays = 0;
  let averageHours = 0;
  let totalHours = 0;

  trainingData.forEach((val) => {
    if(isNaN(Number(val))){
      throw new Error('malformatted parameters');
    }
    if (val !== 0) {
      trainingDays++;
      totalHours += val;
      averageHours = totalHours / trainingDays;
    }
  });

  // if beat the target and exercised > median days then rating is 3
  // if exercise days median days but average hours is slightly below target then 2
  // otherwise 1

  const averageExerciseDays = trainingDays / trainingData.length;
  // console.log('averageExerciseDays', averageExerciseDays);
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
};

//
// console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
// console.log(calculateExercises([1.5, 0, 2, 2.1, 0, 1.4, 1], 2));
// console.log(calculateExercises([4.5, 0, 0, 5.1, 0, 1.4, 0], 2));
// console.log(calculateExercises([1.5, 0, 0, 2.1, 0, 1.4, 0], 2));



// npm run calculateExercises 3 0 2 4.5 0 3 1 2
// npm run calculateExercises 1.5 0 2 2.1 0 1.4 1 2
// npm run calculateExercises 4.5 0 0 5.1 0 1.4 0 2
// npm run calculateExercises 1.5 0 0 2.1 0 1.4 0 0 2

const calculateExerciseService ={
  calculateExercises:calculateExercises,
}


export default calculateExerciseService;
