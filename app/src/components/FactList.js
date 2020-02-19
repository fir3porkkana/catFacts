import React from 'react'
import { Card } from 'semantic-ui-react'
import selectRandom from "../utilities"

const FactList = ({ allFacts }) => {
    const facts = selectRandom(allFacts)
    console.log('facts ', facts);


    return (
        <div>
            <Card.Group itemsPerRow={1}>
                {facts.map(fact =>
                    <Card key={fact._id} header={fact.text} />
                )}
            </Card.Group>
        </div>
    )
}

export default FactList