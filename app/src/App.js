import React, { useEffect, useState } from 'react'
import './App.css'
import { Button, Loader } from "semantic-ui-react";
import axios from "axios"


const App = () => {
  const [facts, setFacts] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3001/api/facts").then(response => {
      console.log("data ", response.data)

      setFacts([...response.data])
      return axios
    })
      .catch(error => {
        console.log("error: ", error)
        setError(error)
      })

  }, [])


  return (
    <div className="App">
      {!facts ?
        (<Loader active />) :
        facts.map(f =>
          <h3 key={f._id}>
            {f.text}
          </h3>
        )}

      <Button onClick={console.log("remember to add the eventhandler")} >Get new facts!</Button>
    </div>
  )
}

export default App;
