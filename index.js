import './style.css'
import { mainLabels } from './src/components/mainLabels/mainLabels.js'
import { clickSidebbarButtons } from './src/components/clickSidebarButtons/clickSidebarButtons.js'
import { createSidebar } from './src/components/createSidebar/createSidebar.js'
import { projectsPage } from './src/pages/projects/projects.js'
import { about } from './src/pages/about/about.js'


const main = document.createElement('main')
main.classList.add('grid-container', 'main')

const addMainToBody = () => {
  const body = document.querySelector('body')
  body.append(main)
}

const createGeneralInfo = () => {
  const generalInfo = document.createElement('article')
  const generalInfoDiv = document.createElement("div")

  generalInfo.className = 'generalInfo'
  generalInfo.id = 'generalInfo'
  generalInfoDiv.id = "generalInfoDiv"

  generalInfo.append(mainLabels())
  generalInfo.append(generalInfoDiv)
  return generalInfo
}

const showContent = () => {
  const tabButton = document.querySelectorAll('.tabButton')
  const generalInfoDiv = document.querySelector('#generalInfoDiv')
  const aboutPage = about()
  const printProjects = projectsPage()

  let sectionToShow = "projects"

  generalInfoDiv.append(printProjects);
  generalInfoDiv.append(aboutPage)

  tabButton.forEach((button) => {
    button.addEventListener('click', () => {
      tabButton.forEach((btn) => btn.classList.remove('tabSelected'));
      button.classList.add('tabSelected');

      if (
        button.classList.contains('projectsButton') &&
        sectionToShow === "about"
      ) {

        sectionToShow = "projects"
        aboutPage.classList.add("hide")
        printProjects.classList.remove("hide")

      } else if (
        button.classList.contains('aboutPageButton') &&
        sectionToShow === "projects"
      ) {
        sectionToShow = "about"
        console.log("working about");
        printProjects.classList.add("hide")
        aboutPage.classList.remove("hide")
      }
    })
  })


}

const appendToMain = () => {
  const printSideBar = createSidebar()
  const printGeneralInfo = createGeneralInfo()

  main.append(printSideBar)
  main.append(printGeneralInfo)
  showContent(printGeneralInfo)
}

addMainToBody()
appendToMain()
clickSidebbarButtons()
// languageContactDropdownfunction()


