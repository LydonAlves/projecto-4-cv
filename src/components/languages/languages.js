import { languageSkills } from '../../informationArrays/languages'
import './languages.css'

export const createLanguageDivs = () => {
  const languageSection = document.createElement('section')
  // const dropDownText = document.createElement('p')

  languageSection.className = 'languageSection'
  // dropDownText.className = 'dropDownText'
  // dropDownText.innerText = 'Click on arrows to see more'

  // languageSection.append(dropDownText)

  for (const languageSkill of languageSkills) {
    const individualLanguageDiv = document.createElement('div')
    // const languageDotsDiv = document.createElement('div')
    // const dropDownButton = document.createElement('button')
    // const dropDown = document.createElement('img')
    const language = document.createElement('h3')
    const comments = document.createElement('p')
    // const levelDots = createLevelDots(languageSkill)

    individualLanguageDiv.className = 'individualLanguageDiv'
    // dropDownButton.className = 'dropDownButton'
    // dropDown.className = 'dropDown'
    // dropDown.src = '/icons/dropDown.png'
    language.className = 'language'
    language.innerText = languageSkill.language
    comments.innerText = languageSkill.comments
    // languageDotsDiv.className = 'languageDotsDiv'
    comments.classList.add('comments')
    // dropDownButton.append(dropDown)
    // languageDotsDiv.append(dropDownButton)
    // languageDotsDiv.append(language)
    // languageDotsDiv.append(levelDots)
    // individualLanguageDiv.append(languageDotsDiv)
    individualLanguageDiv.append(language)
    individualLanguageDiv.append(comments)
    languageSection.append(individualLanguageDiv)
  }

  // showDropdownContent(languageSection)
  return languageSection
}

// const createLevelDots = (languageSkill) => {
//   const dotsContainerA = document.createElement('div')

//   const proficiency = languageSkill.level
//   const dotsContainer = document.createElement('div')
//   dotsContainer.className = 'dotsContainer'

//   for (let i = 0; i <= 4; i++) {
//     const level = document.createElement('div')
//     level.className = 'level'
//     if (proficiency > i) {
//       level.classList.add('fill')
//     }
//     dotsContainer.append(level)
//   }
//   dotsContainerA.append(dotsContainer)

//   return dotsContainerA
// }

// export const showDropdownContent = (languageSection) => {
//   const languageDivs = languageSection.querySelectorAll(
//     '.individualLanguageDiv'
//   )
//   const allComments = languageSection.querySelectorAll('.comments')
//   const dropDownImgs = languageSection.querySelectorAll('.dropDown')

//   languageDivs.forEach((div) => {
//     const comment = div.querySelector('.comments')
//     const dropDownButton = div.querySelector('.dropDownButton')
//     const dropDownImg = div.querySelector('.dropDown')

//     dropDownButton.addEventListener('click', () => {
//       if (dropDownImg.classList.contains('dropDownClicked')) {
//         dropDownImg.classList.remove('dropDownClicked')
//         comment.classList.remove('commentsVisible')
//       } else {
//         dropDownImgs.forEach((dropDown) => {
//           dropDown.classList.remove('dropDownClicked')
//           dropDown.classList.add('dropDownNotClicked')
//         })
//         dropDownImg.classList.add('dropDownClicked')
//         allComments.forEach((comment) => {
//           comment.classList.remove('commentsVisible')
//         })

//         comment.classList.add('commentsVisible')
//       }
//     })
//   })
// }
