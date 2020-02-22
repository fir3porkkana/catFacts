import React from 'react'
import { Card } from "semantic-ui-react";

const FactSheet = ({ fact }) => {

    return (
        <Card
            description={fact.text}
            fluid
        />
    )
}

export default FactSheet