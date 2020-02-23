import React from 'react'
import { Link } from "react-router-dom"
import { Menu, MenuItem } from "semantic-ui-react";

const Header = ({ getNewSet }) => {

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