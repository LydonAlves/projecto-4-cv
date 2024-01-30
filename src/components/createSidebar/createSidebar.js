import './createSidebar.css'
import { createContactMethods } from '../contacts/contacts.js'
import { createLanguageDivs } from '../languages/languages.js'
import { createInfoSection } from '../personalInfo/info.js'
import { sidebarButtons } from '../sidebarButtons/sidebarButtons.js'
import { skillsIcons } from '../skills/skills.js'

const languageContactDropdown = () => {
  const LCDropDownButtonDiv = document.createElement('div')
  const dropdownButton = document.createElement('button')
  const dropdownIcon = document.createElement('img')

  LCDropDownButtonDiv.classList.add('LCDropDownButtonDiv')
  dropdownButton.classList.add('dropdownButtonlanguageContact')
  dropdownButton.innerText = 'Show more'

  LCDropDownButtonDiv.append(dropdownButton)
  return LCDropDownButtonDiv
}

export const languageContactDropdownfunction = () => {
  const languageAndSkillsDiv = document.querySelector('.languageAndSkillsDiv')
  const dropdownButton = document.querySelector(
    '.dropdownButtonlanguageContact'
  )
  //! I need to add the logic that when the screen is small that languageAndSkillsDiv has class "hide", or display none
  dropdownButton.addEventListener('click', () => {
    languageAndSkillsDiv.classList.toggle('hide')
    dropdownButton.innerText =
      dropdownButton.innerText === 'Show more' ? 'Show less' : 'Show more'
  })
}

export const createSidebar = () => {
  const sideBar = document.createElement('article')
  const sideBarDiv = document.createElement('div')
  const languageAndSkillsDiv = document.createElement('div')
  const printProfileInfo = createInfoSection()
  const printSkillsIcons = skillsIcons()

  const printLanguages = createLanguageDivs()
  const printContactMethods = createContactMethods()

  sideBar.classList.add('sideBar', 'flex-container')
  sideBarDiv.className = 'sideBarDiv'
  languageAndSkillsDiv.className = 'languageAndSkillsDiv'
  printContactMethods.classList.add('hide')

  sideBarDiv.append(printProfileInfo)
  sideBarDiv.append(printSkillsIcons)
  sideBarDiv.append(languageContactDropdown())
  sidebarButtons(languageAndSkillsDiv)
  languageAndSkillsDiv.append(printLanguages)
  languageAndSkillsDiv.append(printContactMethods)
  sideBarDiv.append(languageAndSkillsDiv)
  sideBar.append(sideBarDiv)

  return sideBar
}
