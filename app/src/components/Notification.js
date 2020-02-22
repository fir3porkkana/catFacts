import React from "react"
import { Popup, Message } from 'semantic-ui-react'
import { useStore } from "react-hookstore"

const Notification = () => {
    const [error, setError] = useStore("errorStore")

    // console.log("error in notification ", error)

    if (!error) return null
    return (
        // <Popup trigger={
        <Message error>
            <Message.Header>Apologies, something went wrong while fetching your facts :(</Message.Header>
        </Message>
        // }>
        //     <Popup.Content>
        //         {error ? error : "unable to get error message"} 
        //     </Popup.Content>
        // </Popup>

    )
}

export default Notification