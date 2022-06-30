import style from './Skillls.module.scss'
import con from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {MyTitles} from '../common/components/title/Title';


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
                <MyTitles title={'Skills'}/>
                <div className={style.skills}>
                    {skills.map((f,i)=>(<Skill key={i} title={f.title} icon={f.icon} description={f.description}/>))}
                </div>
            </div>
        </div>
    )
}