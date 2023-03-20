import {Express} from 'express';
import {Request, Response} from 'express';
import express from "express";
import qs from "qs";

const app: Express = express();
app.use('query parser', (str: string) => qs.parse(str, { /* custom options */}));
app.use(express.json());

import BmiCal from './bmiCalculator';
import calculatorService, {Operation} from './calculator';

app.get('/ping', (_req: Request, res: Response) => {
  res.send('pong');
});

app.get('/hello', (_req: Request, res: Response) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req: Request, res: Response) => {
  try {
    const {height, weight} = BmiCal.validQueryParams([String(req.query.height), String(req.query.weight)]);
    const result = BmiCal.calculateBmi(height, weight);

    res.send({
      weight: weight,
      height: height,
      bmi: result
    });
  } catch (e) {
    res.send({
      error: "malformatted parameters"
    });
  }
});


// curl -X POST http://localhost:3003/calculate  -H 'Content-Type: application/json'   -d '{"arg1":2,"arg2":3, "op": "add"}'
// curl -X POST http://localhost:3003/calculate  -H 'Content-Type: application/json'   -d '{"arg1":2,"arg2":3, "op": "multiply"}'
// curl -X POST http://localhost:3003/calculate  -H 'Content-Type: application/json'   -d '{"arg1":2,"arg2":3, "op": "divide"}'
app.post('/calculate', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {arg1, arg2, op} = req.body;

  const result = calculatorService.calculator(Number(arg1), Number(arg2), op as Operation);
  res.send({result});
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
