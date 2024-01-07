import './mainLabels.css'

export const mainLabels = () => {
  const mainLabelsbuttonsDiv = document.createElement('div')
  const projects = document.createElement('button')
  const workExperience = document.createElement('button')
  const education = document.createElement('button')

  mainLabelsbuttonsDiv.classList = 'mainLabelsbuttonsDiv'
  projects.innerText = 'Projects'
  projects.classList.add('tabButton', 'projectsButton')
  workExperience.innerText = 'Work Experience'
  workExperience.classList.add('tabButton', 'workExperienceButton')
  education.innerText = 'Education'
  education.classList.add('tabButton', 'educationButton')

  mainLabelsbuttonsDiv.append(projects)
  mainLabelsbuttonsDiv.append(workExperience)
  mainLabelsbuttonsDiv.append(education)

  return mainLabelsbuttonsDiv
}
