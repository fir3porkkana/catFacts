import React, { useEffect, useState } from 'react'
import './App.css'
import { Loader, Dimmer } from "semantic-ui-react";
import useAxios from "axios-hooks"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { createStore, useStore } from "react-hookstore"

import Header from "./components/Header"
import FactList from "./components/FactList"
import OneFact from './components/OneFact';
import NotFound from "./components/NotFound"
import selectRandom from "./utilities"

createStore("factStore", null)
createStore("errorStore", null)

const App = () => {
  const [facts, setFacts] = useStore("factStore")
  const [errorStore, setErrorStore] = useStore("errorStore")

  const [fiveFacts, setFiveFacts] = useState()


  const [{ data, loading, error }, refetch] = useAxios(
    "http://localhost:3001/api/facts"
  )

  useEffect(() => {
    //fetch all ~200 facts from the server at once, so that refreshing and navigating is faster
    //and more responsive
    if (!loading) {
      setFacts(data.all)
      setFiveFacts(selectRandom(data.all))
    }
    if (error) {
      setErrorStore(error)
      console.log("error: ", error)
    }
  }, [loading, errorStore])

  const getNewSet = () => {
    setFiveFacts(selectRandom(facts))
  }


  return (
    <Router>
      <div className="App">
        <Header getNewSet={getNewSet} />
        <div className="mainContent">
          {loading || !facts ?
            <Dimmer active>
              <Loader>Loading facts</Loader>
            </Dimmer> :
            <div>
              <Switch>
                <Route exact path="/" render={() => <FactList facts={fiveFacts} />} />
                <Route exact path="/facts/:id" render={({ match }) => <OneFact factId={match.params.id} />} />
                <Route component={NotFound} />
              </Switch>
            </div>
          }
        </div>
      </div>
    </Router>
  )
}

export default App;
