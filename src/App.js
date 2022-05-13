import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //React-bootstrap 기본적으로 적어주기
import {Nav,Card,Button} from 'react-bootstrap';
// import { Button, ButtonToolbar } from 'react-bootstrap'; 이런식으로 import
import React, {useState} from "react"; //useState 쓸려면 불러와야됨

function App() {
  let [a1,b1] = useState(['남자코트 추천','강남 우동맛집','파이썬 독학']);
    function func2(){
      let input = prompt('수정할 값? :');
      let copy = [...a1];
      copy[0] = input;
      b1(copy);
    }
    function func3(){
      let input = prompt('수정할 값? :');
      let copy = [...a1];
      copy[1] = input;
      b1(copy);
    }
    function func4(){
      let input = prompt('수정할 값? :');
      let copy = [...a1];
      copy[2] = input;
      b1(copy);
    }
    function sort_(){
      let copy = [...a1];
      copy = copy.sort();
      b1(copy);
    }
  
  return (
    <div className="App">
      <div className='Nav1'>
        <h1>React Blog</h1>
      </div>
      <div className='Dat1'>
        <h1>{a1[0]}</h1>
        <p>2월 17일 발행</p>
        <button onClick={func2}>수정</button>
      </div>
      <div className='Dat1'>
        <h1>{a1[1]}</h1>
        <p>2월 17일 발행</p>
        <button onClick={func3}>수정</button>
      </div>
      <div className='Dat1'>
        <h1>{a1[2]}</h1>
        <p>2월 17일 발행</p>
        <button onClick={func4}>수정</button>
      </div>
      <button onClick={sort_}>수정</button>

    </div>
  );
}

export default App;
