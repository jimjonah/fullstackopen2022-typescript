import {courseParts} from "./types";

const Footer = ({courseParts}: {courseParts:Array<courseParts>}) => {
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
