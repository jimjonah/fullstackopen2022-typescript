import express from "express";

const router = express.Router();
import {Request, Response} from 'express';
import patientService from "../services/patientService";

router.get('/', (_req:Request, res:Response) => {
  res.send(patientService.getNonSensitiveEntries());
});

router.post('/', (_req:Request, res:Response) => {
  res.send('Saving a patient!');
});

export default router;
module.exports = router;
