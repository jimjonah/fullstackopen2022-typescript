// interface MultiplyValues {
//   value1: number;
//   value2: number;
// }

export type Operation = 'multiply' | 'add' | 'divide';

// export interface calculatorQueryParams {
//   arg1: number;
//   arg2: number;
//   op: Operation;
// };


// const parseArguments = (args: string[]): MultiplyValues => {
//   if (args.length < 3) throw new Error('Not enough arguments');
//   if (args.length > 3) throw new Error('Too many arguments');
//
//   if (!isNaN(Number(args[0])) && !isNaN(Number(args[1]))) {
//     return {
//       value1: Number(args[0]),
//       value2: Number(args[1])
//     };
//   } else {
//     throw new Error('Provided values were not numbers!');
//   }
// };

// const calculator = (a: number, b: number, printText: string) => {
//   console.log(printText, a * b);
// };


// const a: number = Number(process.argv[2]);
// const b: number = Number(process.argv[3]);
//
// multiplicator(a, b, `Multiplied ${a} and ${b}, the result is:`);

// try {
//   const { value1, value2 } = parseArguments(process.argv);
//   calculator(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
// } catch (error: unknown) {
//   let errorMessage = 'Something bad happened.'
//   if (error instanceof Error) {
//     errorMessage += ' Error: ' + error.message;
//   }
//   console.log(errorMessage);
// }

// multiplicator(2, 4, 'Multiplied numbers 2 and 4, the result is:');
// // multiplicator('how about a string?', 4, 'Multiplied a string and 4, the result is:');
//
// type Operation = 'multiply' | 'add' | 'divide';
//
//
const calculator = (a: number, b: number, op: Operation) : number => {
  switch(op) {
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) throw new Error('Can\'t divide by 0!');
      return a / b;
    case 'add':
      return a + b;
    default:
      throw new Error('Operation is not multiply, add or divide!');
  }
}
//
// try {
//   console.log('args', (process.argv))
//   console.log(calculator(1, 0 , 'divide'));
//   console.log(calculator(1, 5 , 'divide'));
//   console.log('output is', calculator(1, 2, 'add'));
// } catch (error: unknown) {
//   let errorMessage = 'Something went wrong: '
//   if (error instanceof Error) {
//     errorMessage += error.message;
//   }
//   console.log(errorMessage);
// }

const calculatorService = {
  calculator: calculator,
};
export default calculatorService;
