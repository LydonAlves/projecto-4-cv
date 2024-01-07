import './style.css'

import { printCards } from './src/components/projects/projects.js'
import { createLanguageDivs } from './src/components/languages/languages.js'
import { skillsIcons } from './src/components/skills/skills.js'
import { createContactMethods } from './src/components/contacts/contacts.js'
import { createInfoSection } from './src/components/personalInfo/info.js'
import { createExperienceCards } from './src/components/experience/experience.js'
import { createEducationCards } from './src/components/education/education.js'
import { mainLabels } from './src/components/mainLabels/mainLabels.js'

//! He terminado el proyecto con las funciones pedidos, aún me queda terminar con el css. Iré haciendo el css poco a poco cuando tengo ratos libres, ya que no require mucho esfuerzo. Por ahora entrego el proyecto para poder seguir con el curso.

const main = document.createElement('main')
main.classList.add('grid-container', 'main')

const addMainToBody = () => {
  const body = document.querySelector('body')
  body.append(main)
}

const createSidebar = () => {
  const sideBar = document.createElement('article')
  const sideBarDiv = document.createElement('div')

  sideBar.classList.add('sideBar', 'flex-container')
  sideBarDiv.className = 'sideBarDiv'

  const printLanguages = createLanguageDivs()
  const printSkillsIcons = skillsIcons()
  const printContactMethods = createContactMethods()
  const printProfileInfo = createInfoSection()

  sideBarDiv.append(printProfileInfo)
  sideBarDiv.append(printSkillsIcons)
  sideBarDiv.append(printLanguages)
  sideBarDiv.append(printContactMethods)
  sideBar.append(sideBarDiv)

  return sideBar
}

const createGeneralInfo = () => {
  const generalInfo = document.createElement('article')

  const printProjects = printCards()
  const printExperienceCards = createExperienceCards()
  const printEducationCards = createEducationCards()

  generalInfo.className = 'generalInfo'

  generalInfo.append(mainLabels())
  generalInfo.append(printExperienceCards)
  generalInfo.append(printEducationCards)
  generalInfo.append(printProjects)

  return generalInfo
}

const showHideGeneralInfo = () => {
  const workExperienceSection = document.querySelector('#experienceID')
  const projectsSection = document.querySelector('#projectsId')
  const educationSection = document.querySelector('#educationId')

  const projectsButton = document.querySelector('.projectsButton')
  const workExperienceButton = document.querySelector('.workExperienceButton')
  const educationButton = document.querySelector('.educationButton')

  workExperienceSection.className = 'hide'
  educationSection.className = 'hide'
  projectsButton.classList.add('mainTabSelected')

  const toggleSection = () => {
    const tabButton = document.querySelectorAll('.tabButton')
    console.log(tabButton)
    tabButton.forEach((button) => {
      if (
        button.classList.contains('mainTabSelected') &&
        button.classList.contains('workExperienceButton')
      ) {
        workExperienceSection.classList.add('experienceCardSection')
        projectsSection.classList.add('hide')
        educationSection.classList.remove('educationCardsSection')
      } else if (
        button.classList.contains('mainTabSelected') &&
        button.classList.contains('educationButton')
      ) {
        workExperienceSection.classList.remove('experienceCardSection')
        projectsSection.classList.add('hide')
        educationSection.classList.add('educationCardsSection')
      } else if (
        button.classList.contains('mainTabSelected') &&
        button.classList.contains('projectsButton')
      ) {
        workExperienceSection.classList.remove('experienceCardSection')
        projectsSection.classList.remove('hide')
        educationSection.classList.remove('educationCardsSection')
      }
    })
  }

  document.querySelectorAll('.tabButton').forEach((button) => {
    button.addEventListener('click', () => {
      const clickedButton = document.querySelector('.tabButton.mainTabSelected')
      console.log('clicked')
      if (clickedButton) {
        clickedButton.classList.remove('mainTabSelected')
      }
      button.classList.add('mainTabSelected')
      toggleSection()
    })
  })
}

const appendToMain = () => {
  const printSideBar = createSidebar()
  const printGeneralInfo = createGeneralInfo()

  main.append(printSideBar)
  main.append(printGeneralInfo)
}

addMainToBody()
appendToMain()
showHideGeneralInfo()
