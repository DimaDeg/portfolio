import style from './Skillls.module.scss'
import {Skill} from "./skill/Skill";
import {MyTitles} from '../common/components/title/Title';
import js from '../assets/image/js.svg';
import ts from '../assets/image/ts.svg';
import react from '../assets/image/react.svg';
import redux from '../assets/image/redux.svg';
import html from '../assets/image/html.png'


const skills = [
    {title: 'html, css',icon:html},
    {title: 'js',icon:js},
    {title: 'typescript',icon:ts},
    {title: 'react',icon:react},
    {title: 'redux',icon:redux},
]

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <MyTitles title={'Skills'}/>
                <div className={style.skills}>
                    {skills.map((f,i)=>(<Skill key={i} title={f.title} icon={f.icon}/>))}
                </div>
            </div>
        </div>
    )
}