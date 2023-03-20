import express from "express";

const router = express.Router();
import {Request, Response} from 'express';
import diagnosesService from "../services/diagnosesService";

router.get('/', (_req:Request, res:Response) => {
  res.send(diagnosesService.getEntries());
});

router.post('/', (_req:Request, res:Response) => {
  res.send('Saving a diagnosesRouter!');
});

export default router;
module.exports = router;
