import { useState } from "react";
import Header from "./component/Header/Header";
import "./App.css";
import Landing from "./component/LandingPage/Landing";
import Tools from "./component/Tools/Tools";
import Projects from "./component/projects/Projects";
import VideoSection from "./component/VideoSection/VideoSection";
import ImgSection from "./component/ImgSection/ImgSection";
import Resume from "./component/Resume/Resume";
import Footer from "./component/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Landing />
      <Tools />
      <Projects />
      <VideoSection />
      <ImgSection />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
