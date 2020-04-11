import React, {Component} from 'react';
import './ProjectList.scss';
import Project from '../Project/Project';
import { projectData } from '../projectData';


export default class ProjectList extends Component {
    state = {
        projects: projectData
    };
    render() {
        const {projects} = this.state;
        

        return(
            <section className="projectlist">
             {projects.map(project => {
                 return <Project key={project.id} project={project} />;
             })}
            </section>
        );
    }
}