import style from './Skillls.module.css'
import con from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

const skills = [
    {title: 'html',icon:'',description:'dsfafas qweqasdw dqwda w qdq cdq  dqwdq'},
    {title: 'css',icon:'',description:'eqweqw fsdqwe qw3'},
    {title: 'js',icon:'',description:'dqwdqwsa dq eqweqw dqweqw  dqwdq dqw'},
    {title: 'react',icon:'',description:'dqwdqw dqwdqw sdfsd  fsfwqdqwdqwd'},
    {title: 'typescript',icon:'',description:'qweqw dseqwe qw'},
]

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${con.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {skills.map((f,i)=>(<Skill key={i} title={f.title} icon={f.icon} description={f.description}/>))}
                </div>
            </div>
        </div>
    )
}