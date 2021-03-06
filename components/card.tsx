import { Project } from ".prisma/client"
import classNames from "classnames"
import styles from '../styles/Card.module.css'

export const Card:React.FC<Project> = (project) => {

return <div className={classNames(styles.card, styles[project.theme])}>
          <a href={project.url} >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div >
             {project.tags.map((tag,index) => {
               return <span key={index}>{tag}</span>
             })} 
            </div>
          </a>

        </div>
    
}