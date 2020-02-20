import React from 'react'
import { Card } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const FactSheet = ({ fact }) => {

    return (
        <Card
            description={fact.text}
            fluid
        />
    )
}

export default FactSheet