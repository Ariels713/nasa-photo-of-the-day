import React, { useState, useEffect } from "react";
import "./App.css";
import ButtonMaker from './components/ButtonMaker'
import axios from "axios";
import PhotoDisplayer from "./components/PhotoDisplayer";
import PhotoTitle from './components/PhotoTitle';
import PhotoInfo from './components/PhotoInfo';

//const NasaAPIKey = `6VxUxGjWHhbsCJRGcd8nAfY53MmCWoAyDbIPh9hB`
// const NasaAPIRequest = `https://api.nasa.gov/planetary/apod?api_key=6VxUxGjWHhbsCJRGcd8nAfY53MmCWoAyDbIPh9hB`

function App() {
  const [nasaData, setNasaData] = useState({})
  
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=3wSKKO1Q98tShacOzfRAegVeuBojz8JT5b3B52Qr")
      .then(response => {setNasaData(response.data)})
      .catch(error => {(console.log(error))})
  }, [])

  console.log(nasaData)

  return (
    <div className="App">

      <PhotoTitle title={nasaData.title}/>
      <PhotoDisplayer imageSrc={nasaData.url}/>
      <PhotoInfo explanation={nasaData.explanation} />
      <ButtonMaker label="Previous"/>
      <ButtonMaker label="Next" updateImage={setNasaData} />
    
    </div>
  )
}

export default App;
