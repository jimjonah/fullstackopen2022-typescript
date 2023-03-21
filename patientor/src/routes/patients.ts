import express from "express";

const router = express.Router();
import {Request, Response} from 'express';
import patientService from "../services/patientService";
import toNewPatientEntry from "../services/patientUtils";

router.get('/', (_req:Request, res:Response) => {
  res.send(patientService.getNonSensitiveEntries());
});

router.post('/', (req:Request, res:Response) => {
  try{
    const newDiaryEntry = toNewPatientEntry(req.body);
    const addedEntry = patientService.addPatient(newDiaryEntry);

    // const { date, weather, visibility, comment } = req.body;
    // const addedEntry = diaryService.addDiary({
    //   date,
    //   weather,
    //   visibility,
    //   comment,
    // });
    res.json(addedEntry);
  }catch (e) {
    if (e instanceof Error) {
      const errorMessage = ' Error: ' + e.message;
      res.send({
        error: errorMessage
      });
    }
  }
});

export default router;
module.exports = router;
