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
    {image: tdlImg,name: 'social-network',description:'dadawdeqw asda sad dasdqw dasxczxcasczxw'},
    {image: socialImg,name: 'todolist',description:'xqdas adwa daaw adw da daw dad awd awd awda qwe dasdqw w asrq eqweq sawqe'}
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