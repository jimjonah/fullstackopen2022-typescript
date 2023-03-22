import {CoursePart} from "./types";

const Part = ({part}: { part: CoursePart }) => {
  switch (part.kind) {
    case "basic" :
      // console.log(part.name, part.description, part.exerciseCount);
      return (<BasicPart partName={part.name} description={part.description} count={part.exerciseCount}/>);
    case "group" :
      // console.log(part.name, part.exerciseCount, part.groupProjectCount);
      return (<GroupPart partName={part.name} groupProjectCount={part.groupProjectCount} count={part.exerciseCount}/>);
    case "background" :
      // console.log(part.name, part.description, part.backgroundMaterial);
      return (<BackgroundPart partName={part.name} description={part.description} backgroundMaterial={part.backgroundMaterial} count={part.exerciseCount}/>);
    case "special" :
      // console.log(part.name, part.description, part.backgroundMaterial);
      return (<SpecialPart partName={part.name} description={part.description} requirements={part.requirements} count={part.exerciseCount}/>);
    default:
      // console.log('default hit');
      return (<></>);
  }
}

const BasicPart = ({partName, description, count}: { partName: string, description: string, count: number }) => {
  return (
    <p>
      <b>{partName} {count}</b><br/>
      <i>{description}</i><br/>
    </p>
  )
}

const GroupPart = ({partName, groupProjectCount, count}: { partName: string, groupProjectCount: number, count: number }) => {
  return (
    <>
      <b>{partName} {count}</b><br/>
       project group exercises: {groupProjectCount}<br/>
    </>
  )
}

const BackgroundPart = ({partName, backgroundMaterial, count, description}: { partName: string, backgroundMaterial: string, count: number, description: string }) => {
  return (
    <>
      <b>{partName} {count}</b><br/>
      <i>{description}</i><br/>
      submit to: {backgroundMaterial}<br/>
    </>
  )
}

const SpecialPart = ({partName, description, count, requirements}: { partName: string, description: string, count: number, requirements: Array<string> }) => {
  let reqStr = '';
  const size = requirements.length;
  for (let i = 0; i < size; i++) {
    reqStr += requirements[i];
    if (i < size - 1) {
      reqStr += ', ';
    }
  }

  return (
    <>
      <b>{partName} {count}</b><br/>
      <i>{description}</i><br/>
      required skills: {reqStr}<br/>
    </>
  )
}

export default Part;
