import React, { useState, useEffect } from "react";
import "./App.css";
import ButtonMaker from './components/ButtonMaker'
import axios from "axios";
import PhotoDisplayer from "./components/PhotoDisplayer";

//const NasaAPIKey = `6VxUxGjWHhbsCJRGcd8nAfY53MmCWoAyDbIPh9hB`
// const NasaAPIRequest = `https://api.nasa.gov/planetary/apod?api_key=6VxUxGjWHhbsCJRGcd8nAfY53MmCWoAyDbIPh9hB`

function App() {
  let [nasaData, setNasaData] = useState({})
  
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=6VxUxGjWHhbsCJRGcd8nAfY53MmCWoAyDbIPh9hB")
      .then(response => {setNasaData(response.data)})
      .catch(error => {(console.log(error))})
  }, [])


  return (
    <div className="App">
      
      <PhotoDisplayer imageSrc={nasaData.url}/>
      <ButtonMaker label="Previous" />
      <ButtonMaker label="Next" />
    </div>
  );
}

export default App;
