import React from 'react'
//css
import "../habilidades/habilidades.css"

//iconos
import { AiFillHtml5,AiOutlineGithub,AiOutlineConsoleSql} from "react-icons/ai";
import { DiCss3,DiReact,DiSass,DiJavascript,DiNodejsSmall,DiMongodb} from 'react-icons/di'
import { SiFirebase,SiExpress,SiMysql} from 'react-icons/si'
import { FaGit} from 'react-icons/fa'


const Habilidades = () => {
    return (
        <div id='habilidades'>
            <h2 className='tituloHabilidades'>Habilidades</h2>
            <ul>
                <AiFillHtml5 className='habilidad' title='HTML'/>
                <DiCss3 className='habilidad' title='CSS'/>
                <DiJavascript className='habilidad' title='JS'/>
                <DiSass className='habilidad' title='SASS'/>
                <DiReact className='habilidad' title='REACT'/>
                <SiFirebase className='habilidad' title='FIREBASE'/>
                <AiOutlineGithub className='habilidad' title='GITHUB'/>
                <FaGit className='habilidad' title='GIT'/>
                <DiNodejsSmall className='habilidad' title='node'/>
                <SiExpress className='habilidad' title='express'/>
                <AiOutlineConsoleSql className='habilidad' title='sql'/>
                <SiMysql className='habilidad' title='Mysql'/>
                <DiMongodb className='habilidad' title='Mongo DB'/>
            </ul>
        </div>
    )
}

export default Habilidades
