import {NewDiaryEntry, Visibility, Weather} from '../types';

const toNewDiaryEntry = (newDate:string, newWeather:string, newVisibility:string, newComment:string): NewDiaryEntry => {
  if ( !newDate || !newWeather || !newVisibility || !newComment ) {
    throw new Error('Incorrect or missing data');
  }

    const newEntry: NewDiaryEntry = {
      weather: parseWeather(newWeather),
      visibility: parseVisibility(newVisibility),
      date: parseDate(newDate),
      comment: parseComment(newComment),
    };
    return newEntry;
};

const parseComment = (comment: unknown): string => {
  if (!comment || !isString(comment)) {
    throw new Error('Incorrect or missing comment');
  }

  return comment;
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
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

const parseWeather = (weather: unknown): Weather => {
  if (!weather || !isString(weather) || !isWeather(weather)) {
    throw new Error('Incorrect or missing weather: ' + weather);
  }
  return weather;
};

// const isWeather = (str: string): str is Weather => {
//   return ['sunny', 'rainy', 'cloudy', 'stormy'].includes(str);
// };

const isWeather = (param: string): param is Weather => {
  return Object.values(Weather).map(v => v.toString()).includes(param);
};

const isVisibility = (param: string): param is Visibility => {
  return Object.values(Visibility).map(v => v.toString()).includes(param);
};

const parseVisibility = (visibility: unknown): Visibility => {
  // check !visibility is not needed since the caller has already done that, otherwise add it as another OR expression.
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error('Incorrect or missing visibility: ' + visibility);
  }
  return visibility;
};

export default toNewDiaryEntry;
