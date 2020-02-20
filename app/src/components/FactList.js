import React from 'react'
import { Card } from 'semantic-ui-react'
import selectRandom from "../utilities"
import { Link } from 'react-router-dom'

const FactList = ({ allFacts }) => {
  const facts = selectRandom(allFacts)
  console.log('facts ', facts);


  return (
    <div>
      <Card.Group itemsPerRow={1}>
        {facts.map(fact =>
          <Card key={fact._id} header={fact.text} as={Link} to={`/facts/${fact._id}`} />
        )}
      </Card.Group>
    </div>
  )
}

export default FactList
