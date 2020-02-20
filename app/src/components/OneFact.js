import React from "react"
import { Card, Statistic, Container, Divider, Segment } from 'semantic-ui-react'
import { useStore } from "react-hookstore"


const OneFact = ({ factId }) => {
  const [facts] = useStore("factStore")
  const fact = facts.find(f => f._id === factId)


  console.log("fact in onefact ", fact)

  return (
    <Segment >
      <h1>Posted by one named {fact.user.name.first} {fact.user.name.last}</h1>
      <Statistic floated="right" size="huge">
        <Statistic.Value>{fact.upvotes}</Statistic.Value>
        <Statistic.Label>upvotes on the cat-fact site</Statistic.Label>
      </Statistic>
      <Card header={fact.text} floated="left" />
      <Divider></Divider>
    </Segment>
  )
}

export default OneFact