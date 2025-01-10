import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { courses } from "./data";
import Course from "./components/Course";
import "./css/course.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className="course-main">
        {courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
//courses?.map:  burdaki soru işareti courses'un içi doluysa demek, koymasak da olur ama maple dönerken dolu mu boş mu diye kontrol ediyoruz. doluysa map ile üzerinde dön diyoruz.
//REACT'IN AMACI PROJEYİ COMPONENTLERE BÖLÜP BUNU KULLANABİLMEK!
