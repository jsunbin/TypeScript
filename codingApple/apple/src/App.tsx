import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

let 박스: JSX.Element = <div></div>;

function App() {
  // useState 타입지정은 알아서 잘 해주니깐 신경안써도 됨.
  let [user, setUser] = useState(["Bao"]);
  // let [user, setUser] = useState<string | number>("Bao"); // 쓸 경우는 없지만 혹시 string이나 number가 들어와야한다면 generic으로 직접 지정해줄 수도 있다.

  return (
    <div>
      <h4>Hello World!</h4>
      <Profile name="Fu" age="3" />
    </div>
  );
}

// 타입 지정은 파라미터, return에 가능
function Profile(props: { name: string; age: string }): JSX.Element {
  return <div>This is {props.name}'s Profile.</div>;
}

export default App;
