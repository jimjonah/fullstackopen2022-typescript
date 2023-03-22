import axios from 'axios';
import { DiaryEntry, NewDiaryEntry } from "../types";

const baseUrl = 'http://localhost:3001/api/diaries';

 const getAllEntries = () => {
  return axios
  .get<DiaryEntry[]>(baseUrl)
  .then(response => response.data);
};

 const addEntry = (object: NewDiaryEntry) => {
  return axios
  .post<DiaryEntry>(baseUrl, object)
  .then(response => response.data);
};

export default {
  getAllEntries,
  addEntry,
};
