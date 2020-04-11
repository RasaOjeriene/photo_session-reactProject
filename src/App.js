import React, {Component} from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.scss';
import ProjectList from './components/ProjectList';

class App extends Component {
  render (){
    return (
      <main>
        <NavBar />
        <ProjectList />
      </main>
    )
  }
}


export default App;
