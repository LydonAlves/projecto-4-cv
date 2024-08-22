import { createProjectCards } from '../../components/createProjectCards/createProjectsCards'
import { projects } from '../../informationArrays/projects'
import './projects.css'

export const projectsPage = () => {
  const projectsSection = document.createElement('section')
  const projectsContainer = document.createElement('div')
  const projectsUL = document.createElement('ul')

  projectsSection.id = 'projectsId'
  projectsSection.className = 'projectsSection'
  projectsContainer.className = 'projectsContainer'
  projectsContainer.id = "projectsContainer"
  projectsUL.className = 'projectsUL'
  projectsUL.innerHTML = ' '

  const projectList = projects.slice().reverse()

  for (const project of projectList) {
    const projectLi = createProjectCards(project)
    projectsUL.appendChild(projectLi)
  }

  projectsContainer.append(projectsUL)
  projectsSection.append(projectsContainer)
  return projectsSection
}


