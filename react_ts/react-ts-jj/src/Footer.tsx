import {CoursePart} from "./types";

const Footer = ({courseParts}: {courseParts:Array<CoursePart>}) => {
  return(
    <>
      <p>
        Number of exercises{" "}
        {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </>
  )
}

export default Footer;
