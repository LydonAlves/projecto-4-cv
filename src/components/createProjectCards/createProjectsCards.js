import "./createProjectCards.css"
import { detailedViewProject } from "../detailedViewProject/detailedViewProject"

export const createProjectCards = (project) => {
  const projectsLi = document.createElement('li')
  const image = document.createElement('img')
  const infoDiv = document.createElement('div')
  const projectName = document.createElement('h3')
  const description = document.createElement('p')
  const stack = document.createElement("p")
  const buttonDiv = document.createElement('div')
  const buttonLive = document.createElement('a')
  const buttonCode = document.createElement('a')
  const buttonSeeMore = document.createElement("button")

  projectsLi.className = 'projectsLi'
  image.src = project.image
  image.className = 'projectImg'
  infoDiv.className = 'infoDiv'
  projectName.innerText = project.title
  projectName.className = 'projectName'
  description.innerText = project.description
  description.className = 'description'
  stack.className = "stack"
  stack.innerText = project.stack
  buttonDiv.className = 'buttonDiv'
  buttonLive.href = project.mockupURL
  buttonLive.target = '_blank'
  buttonLive.innerText = 'Live'
  buttonCode.href = project.GIThub
  buttonCode.target = '_blank'
  buttonCode.innerText = 'Code'
  buttonLive.className = 'projectCardButton'
  buttonCode.className = 'projectCardButton'
  buttonSeeMore.innerText = "See More"
  buttonSeeMore.className = "projectCardButton"

  buttonSeeMore.addEventListener('click', () => {
    detailedViewProject(project.id)
  })

  projectsLi.append(image)
  infoDiv.append(projectName)
  infoDiv.append(description)
  buttonDiv.append(buttonSeeMore)
  if (project.mockupURL !== "") {
    buttonDiv.append(buttonLive)
  }
  buttonDiv.append(buttonCode)
  infoDiv.append(stack)
  projectsLi.append(infoDiv)
  projectsLi.append(buttonDiv)

  return projectsLi
}