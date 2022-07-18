import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [fileData, setFileData]=useState();

  const fileChangeHandler=(e)=>{
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler  = (e)=> {
    e.preventDefault();
    
    const data= new FormData();

    data.append('image',fileData)

    axios.post('http://localhost:5000/single', data).then(res=>{
      console.log('File Sent Sucessful')
    }).catch(err=>{console.log(err.message)});

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={onSubmitHandler}>
          <input type='file'  onChange={fileChangeHandler}/>
          <br/>
          <br/>
          <button type='submit'>Submit Filte to Backend</button>
        </form>
 </header>
    </div>
  );
}

export default App;
