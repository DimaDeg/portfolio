import style from './Projects.module.css'
import con from '../common/styles/Container.module.css'
import {Project} from "./project/Project";

const projects = [
    {image: '',name: 'social-network',description:'dadawdeqw asda sad dasdqw dasxczxcasczxw'},
    {image: '',name: 'todolist',description:'xqw cva a as asdasda zxc eq dasq ascq'}
]


export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${con.container} ${style.projectsContainer}`}>
                <h2>My Projects</h2>
                <div className={style.projects}>
                    {projects.map((f,i)=>(<Project key={i} image={f.image} name={f.name} descrition={f.description}/>))}
                </div>
            </div>
        </div>
    )

}