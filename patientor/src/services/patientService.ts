import patientData from '../data/patients';
import {NewPatientEntry, NonSensitivePatientEntry, Patient} from '../types';
import { v1 as uuidv1 } from 'uuid';

const patients: Patient[] = patientData;

const getEntries = (): Patient[] => {
  return patients;
};

const addPatient = ( entry: NewPatientEntry ): Patient => {
  const newDiaryEntry = {
    id: uuidv1(),
    ...entry
  };

  patients.push(newDiaryEntry);
  return newDiaryEntry;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};



export default {
  getEntries,
  getNonSensitiveEntries,
  addPatient,
};
