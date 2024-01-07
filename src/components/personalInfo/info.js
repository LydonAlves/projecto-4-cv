import './info.css'

export const createInfoSection = () => {
  const profileSection = document.createElement('section')
  const profileDiv = document.createElement('div')
  const profilePicImg = document.createElement('img')
  const profileName = document.createElement('p')
  const profileJobTitle = document.createElement('p')

  profilePicImg.src = './public/profile.png'
  profilePicImg.className = 'profilePicImg'
  profileSection.className = 'profileSection'
  profileDiv.className = 'profileDiv'
  profileName.innerText = 'Lydon Alves'
  profileJobTitle.innerText = 'Fullstack Developer'

  profileDiv.append(profilePicImg)
  profileSection.append(profileDiv)
  profileSection.append(profileName)
  profileSection.append(profileJobTitle)

  return profileSection
}
