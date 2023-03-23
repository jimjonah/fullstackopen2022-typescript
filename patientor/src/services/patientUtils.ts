import {Entry, Gender, NewPatientEntry} from "../types";

const toNewPatientEntry = (object: unknown): NewPatientEntry => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object
    && 'occupation' in object && 'entries' in object) {
    const newEntry: NewPatientEntry = {
      name: parseName(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseSSN(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
      entries: parseEntries(object.entries)
    };
    return newEntry;
  }

  throw new Error('Incorrect data: some fields are missing');
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name');
  }

  return name;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

const parseSSN = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error('Incorrect or missing name');
  }

  return ssn;
};


const parseEntries = (entries: unknown): Array<Entry> => {
  if (!entries || !(entries instanceof Array<Entry>)) {
    throw new Error('Incorrect or missing entries');
  }
  if (isEntryArray(entries)) {
    return entries;
  }
  return [];
};


// function isEntryArray(x: unknown[]): x is Entry[] {
//   return x.every(i => typeof i === "object");
// }

const isEntryArray = (entries: unknown): entries is Entry[] => {
  return typeof entries === "object" || entries instanceof Array;
};


const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrect or missing name');
  }

  return occupation;
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender).map(v => v.toString()).includes(param);
};

const parseGender = (gender: unknown): Gender => {
  // check !gender is not needed since the caller has already done that, otherwise add it as another OR expression.
  if (!isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or missing visibility: ' + gender);
  }
  return gender;
};

const parseId = (id: unknown): string => {
  if (!id || !isString(id)) {
    throw new Error("Incorrect or missing id: " + id);
  }
  return id;
};

export {
  parseId,
  toNewPatientEntry
};
