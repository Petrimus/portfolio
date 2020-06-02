import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import { theme } from './components/styles/theme'
// import projects
import { myProjects } from './projects'
import ProjectDetail from './components/projects/ProjectDetail'

const App = () => {

  const [projects, setProject] = useState([])

  useEffect(() => {
    setProject(myProjects)
    // console.log('use effect')    
  }, [])
  
  // console.log('projects ', projects)
  

  const projectById = (id) => projects.find(pro => pro.id === Number(id))
  /*
  const baseUrl = process.env.PUBLIC_URL
  console.log('baseUrl ', baseUrl)
 */
 
  console.log('render')  
  
  return (  
    <ThemeProvider theme={theme}>       
      <Router  basename='/petri.palmu'>       
        <Route exact path="/" render={() =>
          <Home projects={projects} />}
        />        
        <Route path="/index.html" render={() =>
          <Home projects={projects} />}
          />
        <Route exact path="/projects/:id" render={({ match }) =>
          <ProjectDetail project={projectById(match.params.id)} />} />
      </Router>
      </ThemeProvider> 
  )
}

export default App

/*  
"/index.html"
basename={ process.env === 'production' ? '/' : '/'} 

*/