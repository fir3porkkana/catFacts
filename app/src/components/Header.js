import React from 'react'
import { Link } from "react-router-dom"
import { Menu, MenuItem } from "semantic-ui-react";
import { useStore } from "react-hookstore"

const Header = ({ getNewSet }) => {
    const [facts, setFacts] = useStore("factStore")

    return (
        <Menu className="mainHeader" size="massive" stackable borderless attached inverted widths={2}>
            <MenuItem as={Link} to="/" name="Home">
                homepage
            </MenuItem>
            <MenuItem onClick={() => getNewSet()}>
                click here to get a new set of facts
            </MenuItem>
        </Menu>
    )
}

export default Header