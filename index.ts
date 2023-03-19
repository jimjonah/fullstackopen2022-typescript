import {Express} from 'express';
import {Request, Response} from 'express'

const express = require('express');
const app: Express = express();

const qs = require('qs');
app.use('query parser', (str:string) => qs.parse(str, { /* custom options */ }));

import BmiCal from './bmiCalculator';

app.get('/ping', (_req: Request, res: Response) => {
  res.send('pong');
});

app.get('/hello', (_req: Request, res: Response) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req: Request, res: Response) => {
  try{
    const {height, weight} = BmiCal.validQueryParams([String(req.query.height), String(req.query.weight)]);
    let result = BmiCal.calculateBmi(height, weight);

    res.send({
      weight: weight,
      height: height,
      bmi: result
    });
  } catch(e){
    res.send({
      error: "malformatted parameters"
    });
  }

});


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
