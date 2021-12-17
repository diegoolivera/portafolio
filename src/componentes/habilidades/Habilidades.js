import React from 'react'
import { AiFillHtml5,AiOutlineGithub} from "react-icons/ai";
import { DiCss3,DiReact,DiSass,DiJavascript,DiScrum} from 'react-icons/di'
import { SiFirebase} from 'react-icons/si'
import { FaGit} from 'react-icons/fa'


const Habilidades = () => {
    return (
        <div>
            <h2>Habilidades</h2>
            <ul>
                <AiFillHtml5/>
                <DiCss3/>
                <DiJavascript/>
                <DiSass/>
                <DiReact/>
                <SiFirebase/>
                <AiOutlineGithub/>
                <FaGit/>
                <DiScrum/>

            </ul>
        </div>
    )
}

export default Habilidades
