import './sidebarButtons.css'

export const sidebarButtons = (div) => {
  const separationLine = document.createElement('span')
  const sidebarButtonsDiv = document.createElement('div')
  const languageButton = document.createElement('button')
  const contactButton = document.createElement('button')

  separationLine.className = 'separationLine'
  sidebarButtonsDiv.className = 'sidebarButtonsDiv'
  languageButton.classList.add('languageButton', 'sidebarButtons', 'sidebarButtonsUnselected')
  languageButton.innerText = 'Languages'

  contactButton.classList.add(
    'contactButton',
    'sidebarButtons',

  )
  contactButton.innerText = 'Contact'

  sidebarButtonsDiv.append(contactButton)
  sidebarButtonsDiv.append(languageButton)
  div.append(separationLine)
  div.append(sidebarButtonsDiv)
}
