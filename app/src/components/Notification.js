import React from "react"
import { Popup, Message } from 'semantic-ui-react'
import { useStore } from "react-hookstore"

const Notification = () => {
    const [error, setError] = useStore("errorStore")


    if (!error) return null
    return (
        <Message error>
            <Message.Header>Apologies, something went wrong while fetching your facts :(</Message.Header>
        </Message>
    )
}

export default Notification