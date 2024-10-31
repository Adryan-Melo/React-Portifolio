
import React from 'react';
import Menu from './Components/Cabeçalho/Menu';
import Home from './Components/Home/Start';
import Sobre from './Components/Sobre/sobre';
import Skills from './Components/Skills/skills';
import Projetos from './Components/Projetos/projetos';

function App(){
    return(
        <>
        <Menu/>
        <Home/>
        <Sobre/>
        <Skills/>
        <Projetos/>
        </>
    )
}

export default App