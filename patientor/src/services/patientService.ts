import patientData from '../data/patients';
import {NewPatientEntry, NonSensitivePatientEntry, Patient} from '../types';
import { v1 as uuidv1 } from 'uuid';

const patients: Patient[] = patientData;

const getEntries = (): Patient[] => {
  return patients;
};

const findById = (patientId:string): Patient | undefined => {
  console.log('findById', patientId);
  return patients.find(patient => patient.id === patientId);
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
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }));
};



export default {
  getEntries,
  getNonSensitiveEntries,
  addPatient,
  findById,
};
