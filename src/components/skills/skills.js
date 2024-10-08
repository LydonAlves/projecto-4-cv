import './skills.css'

const programmingSkills = ['JavaScript', "Node.js", "MongoDb", "React", "Github", 'HTML', 'CSS', "Canva", "Figma"]

export const skillsIcons = () => {
  const skillsSection = document.createElement('section')
  skillsSection.className = 'skillsSection'

  for (const skill of programmingSkills) {
    const skillItem = document.createElement('div')
    const skillText = document.createElement('p')

    skillItem.className = 'skillItem'
    skillText.innerText = skill

    skillItem.append(skillText)
    skillsSection.append(skillItem)
  }

  return skillsSection
}
