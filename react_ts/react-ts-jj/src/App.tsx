import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {courseParts} from "./types";

const App = () => {
  const courseName = "Half Stack application development";

  return (
    <div>
      <Header courseName={courseName} />
      <Content courseParts={courseParts} />
      <Footer courseParts={courseParts} />
    </div>
  );
};

export default App;
