import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const FactList = ({ facts }) => {

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
