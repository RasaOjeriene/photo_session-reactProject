import React, {Component} from 'react';
import './Project.scss';

export default class Project extends Component{
    state ={
        showInfo: false
    }
    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    render(){
        const { theme, img, name, info } = this.props.project;

        return (
  
            <article className="project">
                <div className="img-container">
                    <img 
                    src={img} 
                    alt="" 
                    />
                </div>
                <div className="project-info">
                    <h3>{theme}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info{" "} 
                    <span onClick={this.handleInfo}>
                        <i className="fas fa-caret-square-down" />
                    </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                    
                </div>
            </article>
            
      
   
        )
    }
}