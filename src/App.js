import React, { useState, useEffect } from "react";
import "./App.css";
import ButtonMaker from './components/ButtonMaker'
import axios from "axios";
import PhotoDisplayer from "./components/PhotoDisplayer";
import PhotoTitle from './components/PhotoTitle';
import PhotoInfo from './components/PhotoInfo';

// new Date().toISOString().split('T')[0]

function App() {
  const [nasaData, setNasaData] = useState({})
  const [date, setDate] = useState(`2019-10-23`)


  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=1LzqvMEPWMIl7ukEc9Ifj3mozXszqGdU791n0LtA`)
      .then(response => {setNasaData(response.data)})
      .catch(error => {(console.log(error))})
  }, [])

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=3wSKKO1Q98tShacOzfRAegVeuBojz8JT5b3B52Qr&date=${date}`)
      .then(response => {setNasaData(response.data)})
      .catch(error => {(console.log(error))})
  }, [date])

  return (
    <div className="App">

      <PhotoTitle title={nasaData.title}/>
      <PhotoDisplayer imageSrc={nasaData.url}/>
      <PhotoInfo explanation={nasaData.explanation} />
      <ButtonMaker label="Random Date in History" updateImage={setDate} />
    
    </div>
  )
}

export default App;
