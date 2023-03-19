import {Express} from 'express';
import { Request, Response } from 'express'
const express = require('express');

const app:Express = express();

app.get('/ping', (_req: Request, res: Response) => {
  res.send('pong');
});

app.get('/hello', (_req: Request, res: Response) => {
  res.send('Hello Full Stack!');
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
