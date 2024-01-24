export const clickSidebbarButtons = () => {
  const languageAndSkillsDiv = document.querySelector('.languageAndSkillsDiv')
  const languageSection = languageAndSkillsDiv.querySelector('.languageSection')
  const contactMethodSection = languageAndSkillsDiv.querySelector(
    '.contactMethodSection'
  )
  const languageButton = languageAndSkillsDiv.querySelector('.languageButton')
  const contactButton = languageAndSkillsDiv.querySelector('.contactButton')

  languageButton.addEventListener('click', () => {
    if (languageButton.classList.contains('sidebarButtonsUnselected')) {
      languageButton.classList.remove('sidebarButtonsUnselected')
      contactButton.classList.add('sidebarButtonsUnselected')
      languageSection.classList.remove('hide')
      contactMethodSection.classList.add('hide')
    }
  })

  contactButton.addEventListener('click', () => {
    if (contactButton.classList.contains('sidebarButtonsUnselected'))
      languageButton.classList.add('sidebarButtonsUnselected')
    contactButton.classList.remove('sidebarButtonsUnselected')
    languageSection.classList.add('hide')
    contactMethodSection.classList.remove('hide')
  })
}
