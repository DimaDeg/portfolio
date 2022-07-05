import style from './Projects.module.scss'
import {Project} from './project/Project';
import {MyTitles} from '../common/components/title/Title';
import tdl from '../assets/image/tdl.png';
import sn from '../assets/image/sn.png';

const socialImg = {
    backgroundImage:`url(${sn})`
}
const tdlImg = {
    backgroundImage:`url(${tdl})`
}
const projects = [
    {image: tdlImg,name: 'social-network',description:'TS, Redux, RestAPI, Thunk,Material UI, Unit Tests'},
    {image: socialImg,name: 'todolist',description:'TS, Redux-Toolkit, RestAPI, Thunk, Unit Tests'}
]

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <MyTitles title={'Projects'} />
                <div className={style.projects}>
                    {projects.map((f,i)=>(<Project key={i} style={f.image} name={f.name} descrition={f.description}/>))}
                </div>
            </div>
        </div>
    )

}