import {Request, Response} from 'express';
import express from 'express';
import diagnosesRouter from "./routes/diagnoses";
import patientsRouter from "./routes/patients";
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors())

const PORT = 3001;

app.get('/api/ping', (_req:Request, res:Response) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diagnoses', diagnosesRouter);

app.use('/api/patients', patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
