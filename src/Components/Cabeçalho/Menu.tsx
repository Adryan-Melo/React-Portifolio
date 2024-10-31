import React from 'react'
import {MenuHeader} from './MenuStyles'

const Menu = () =>(
    <MenuHeader>
        <ul>
            <li id='Home'>Home</li>
            <li id='Sobre'>Sobre</li>
            <li>Skills</li>
            <li>Projetos</li>
        </ul>
    </MenuHeader>
)

export default Menu