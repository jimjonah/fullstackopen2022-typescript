import {CoursePart} from "./types";
import Part from "./Part";

const Content = ({courseParts}: { courseParts: Array<CoursePart> }) => {
  return (
    <>
      {
        courseParts.map(coursePart =>
          <Part key={coursePart.name} part={coursePart}/>
        )
      }
    </>
  )
}

export default Content;
