import React, { useState } from "react";
import ReactDom from "react-dom/client"
import './index.css'

const htmlContainer = document.getElementById("root");
const root = ReactDom.createRoot(htmlContainer);

function StudentInfo(props) {
  return (
    <div>
      <div>
        {props.lastName}, {props.firstName }
      </div>
      <ul>
        <li>
          <strong>ID:</strong> {props.sId}
        </li>
        <li>
          <strong>School:</strong> {props.school}
        </li>
        <li>
          <strong>Major:</strong> {props.major}
        </li>
      </ul>
    </div>
  );
}

function ClassList() {
  return (
    <div>
      <h1 className ="red-text">Welcome to CTP</h1>
      <p>List of Students</p>
      <StudentInfo firstName="Sally" lastName="James" sId="123"/>
      <StudentInfo firstName="Mavis" lastName="Amazing" sId="321"/>
      <StudentInfo firstName="Peggie" lastName="Beautiful" sId="423"/>
      <h1>Hello World!</h1>
      <h1>Hi Again</h1>
      {studentList.map((student) => (
        <StudentInfo {...student} key={student.sId} />
      ))}
    </div>
  );
}

const studentList = [
  {
    firstName: "Misty",
    lastName: "Knight",
    sId: "234",
    school: "Queens College",
    major: "Law",
  },
  {
    firstName: "Jessica",
    lastName: "Jones",
    sId: "434",
    school: "Brooklyn College",
    major: "CS",
  },
  {
    firstName: "Colleen",
    lastName: "Wing",
    sId: "233",
    school: "Queens College",
    major: "CS",
  },
  {
    firstName: "Dare",
    lastName: "Devil",
    sId: "876",
    school: "CCNY",
    major: "Law",
  },
  {
    firstName: "Luke",
    lastName: "Cage",
    sId: "323",
    school: "CCNY",
    major: "Math",
  },
];

function CountApp() {
  const [numClicks, setNumClicks] = useState(0);
  const handleClick = (event) => {
    setNumClicks(numClicks + 1);
  };

  const test = Math.round(Math.random() * 255);
  const test2 = Math.round(Math.random() * 255);
  const test3 = Math.round(Math.random() * 255);
  return (
    <div>
      <p>The button has been clicked {numClicks} times</p>

      <button onClick={handleClick} style={ {backgroundColor: 'rgba(' + test + ',' + test2 + ',' + test3 + ',' + Math.random().toFixed(1) + ')'} }>Click this button</button>
    </div>
  );
}

root.render(<CountApp />);