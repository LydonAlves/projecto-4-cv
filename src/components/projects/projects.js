import './projects.css'

const projects = [
  {
    image: '/projects/nike.png',
    title: 'CSS and HTML',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa possimus eius libero nesciunt illo, earum repellendus placeat corporis iusto laboriosam quas amet, dolor obcaecati veritatis, at unde esse dolorum. Alias?',
    GIThub: 'https://github.com/LydonAlves/proyecto-1-pmba-rtc',
    mockupURL: 'https://proyecto-1-pmba-rtc.netlify.app/'
  },
  {
    image: '/projects/tours.png',
    title: 'JS + Vite',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa possimus eius libero nesciunt illo, earum repellendus placeat corporis iusto laboriosam quas amet, dolor obcaecati veritatis, at unde esse dolorum. Alias?',
    GIThub: 'https://github.com/LydonAlves/andalusia-tours',
    mockupURL: 'https://andalusia-tours.netlify.app/'
  },
  {
    image: '/projects/pinterest.png',
    title: 'JS Components',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa possimus eius libero nesciunt illo, earum repellendus placeat corporis iusto laboriosam quas amet, dolor obcaecati veritatis, at unde esse dolorum. Alias?',
    GIThub: 'https://github.com/LydonAlves/proyecto3-pinterest',
    mockupURL: 'https://proyecto3-pinterest.netlify.app/'
  }
]

//? create a function that parameters can be passed to then it creates an element for each object it recieves, pass this on to the element to be appended
const createProjectCards = (project) => {
  const projectsLi = document.createElement('li')
  const image = document.createElement('img')
  const infoDiv = document.createElement('div')
  const projectName = document.createElement('h3')
  const description = document.createElement('p')
  const buttonDiv = document.createElement('div')
  const button = document.createElement('a')
  const buttonCode = document.createElement('a')

  projectsLi.className = 'projectsLi'
  image.src = project.image
  image.className = 'projectImg'
  infoDiv.className = 'infoDiv'
  projectName.innerText = project.title
  projectName.className = 'projectName'
  description.innerText = project.description
  description.className = 'description'
  buttonDiv.className = 'buttonDiv'
  button.href = project.mockupURL
  button.target = '_blank'
  button.innerText = 'See mockup'
  buttonCode.href = project.GIThub
  buttonCode.target = '_blank'
  buttonCode.innerText = 'See code'
  button.className = 'projectCardButton'
  buttonCode.className = 'projectCardButton'

  projectsLi.append(image)
  infoDiv.append(projectName)
  infoDiv.append(description)
  buttonDiv.append(button)
  buttonDiv.append(buttonCode)
  infoDiv.append(buttonDiv)
  projectsLi.append(infoDiv)

  return projectsLi
}

//? how to append dynamically created elements to one element and avoid creating multiple parent elements.
export const printCards = () => {
  const projectsSection = document.createElement('section')
  const projectsContainer = document.createElement('div')
  const projectsUL = document.createElement('ul')

  projectsSection.id = 'projectsId'
  projectsSection.className = 'projectsSection'
  projectsContainer.className = 'projectsContainer'
  projectsUL.className = 'projectsUL'
  projectsUL.innerHTML = ' '

  for (const project of projects) {
    // console.log(project.image)
    const projectLi = createProjectCards(project)
    projectsUL.appendChild(projectLi)
  }

  projectsContainer.append(projectsUL)
  projectsSection.append(projectsContainer)
  return projectsSection
}

printCards()
