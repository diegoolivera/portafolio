import React from 'react'
//css
import "../habilidades/habilidades.css"

//iconos
import { AiFillHtml5,AiOutlineGithub} from "react-icons/ai";
import { DiCss3,DiReact,DiSass,DiJavascript,DiScrum} from 'react-icons/di'
import { SiFirebase} from 'react-icons/si'
import { FaGit} from 'react-icons/fa'


const Habilidades = () => {
    return (
        <div>
            <h2 className='titulo'>Habilidades</h2>
            <ul>
                <AiFillHtml5 className='habilidad' title='HTML'/>
                <DiCss3 className='habilidad' title='CSS'/>
                <DiJavascript className='habilidad' title='JS'/>
                <DiSass className='habilidad' title='SASS'/>
                <DiReact className='habilidad' title='REACT'/>
                <SiFirebase className='habilidad' title='FIREBASE'/>
                <AiOutlineGithub className='habilidad' title='GITHUB'/>
                <FaGit className='habilidad' title='GIT'/>
                <DiScrum className='habilidad' title='SCRUM'/>

            </ul>
        </div>
    )
}

export default Habilidades
