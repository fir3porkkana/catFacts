import React from 'react'
import { Link } from "react-router-dom"
import { Menu, MenuItem } from "semantic-ui-react";

const Header = () => {
    return (
        <Menu className="mainHeader" size="massive" stackable borderless attached inverted widths={1}>
            <MenuItem as={Link} to="/" name="Home">
                click here to get a new set facts
            </MenuItem>
        </Menu>
    )
}

export default Header