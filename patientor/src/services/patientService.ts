import patientData from '../data/patients';
import {NonSensitivePatientEntry, Patient} from '../types';

const patients: Patient[] = patientData;

const getEntries = (): Patient[] => {
  return patients;
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
  getNonSensitiveEntries
};
