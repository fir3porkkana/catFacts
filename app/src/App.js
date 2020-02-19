import React, { useEffect } from 'react'
import './App.css'
import { Loader, Dimmer } from "semantic-ui-react";
import axios from "axios"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { createStore, useStore } from "react-hookstore"
import Header from "./components/Header"
import FactList from "./components/FactList"

createStore("factStore", null)
createStore("errorStore", null)

const App = () => {
  const [facts, setFacts] = useStore("factStore")
  const [error, setError] = useStore("errorStore")


  useEffect(() => {
    //fetch 250 cat facts at once, so that refreshing is faster
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
    <Router>
      <div className="App">
        <Header />
        <div className="mainContent">
          {!facts ?
            <Dimmer active>
              <Loader>Loading facts</Loader>
            </Dimmer> :
            <Route exact path="/" render={() => <FactList allFacts={facts} />} />
          }
        </div>
      </div>
    </Router>
  )
}

export default App;
