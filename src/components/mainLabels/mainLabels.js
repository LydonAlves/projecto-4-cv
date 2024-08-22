import './mainLabels.css'

export const mainLabels = () => {
  const mainLabelsbuttonsDiv = document.createElement('div')
  const projects = document.createElement('button')
  const about = document.createElement('button')

  mainLabelsbuttonsDiv.classList = 'mainLabelsbuttonsDiv'
  projects.innerText = 'Projects'
  projects.classList.add('tabButton', 'projectsButton', "tabSelected")
  about.innerText = "About"
  about.classList.add('tabButton', 'aboutPageButton',)

  mainLabelsbuttonsDiv.append(projects)
  mainLabelsbuttonsDiv.append(about)

  return mainLabelsbuttonsDiv
}
