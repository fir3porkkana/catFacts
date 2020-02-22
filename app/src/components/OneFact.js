import React from "react"
import { Statistic, Divider, Segment, Header } from 'semantic-ui-react'
import { useStore } from "react-hookstore"
import NotFound from "./NotFound"


const OneFact = ({ factId }) => {
  const [facts] = useStore("factStore")
  const fact = facts.find(f => f._id === factId)

  return (
    <div>
      {!fact ?

        <NotFound />
        :
        <div>
          <div>
            <Header as="h2">
              {fact.text.substring(0, fact.text.length - 1)}
            </Header>
            <Header as="h3" >... and that's a fact!</Header>


          </div>



          <Divider></Divider>
          <Segment className="statistic" circular floated="right">
            <Statistic size="huge">
              <Statistic.Value>{fact.upvotes}</Statistic.Value>
              <Statistic.Label>{fact.upvotes === 1 ? "upvote " : "upvotes "} on the cat-fact site</Statistic.Label>
            </Statistic>
          </Segment>

          <h2>Posted by one named {fact.user.name.first} {fact.user.name.last}</h2>

        </div>
      }
    </div>

  )
}

export default OneFact