export interface Diagnose {
  "code": string,
  "name": string,
  "latin"?: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}

export interface Patient {
  "id": string,
  "name": string,
  "dateOfBirth": string,
  "ssn": string,
  "gender": string,
  "occupation": string,
  "entries": Array<Entry>

}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export type NonSensitivePatientEntry = Omit<Patient, 'ssn'>;
export type NewPatientEntry = Omit<Patient, 'id'>;
export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries'>;



