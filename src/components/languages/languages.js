import './languages.css'

const languageSkills = [
  {
    language: 'English',
    level: 5,
    comments:
      'Native speaker, having being brought up in a bilingual household in South Africa'
  },
  {
    language: 'Spanish',
    level: 5,
    comments:
      'Started learning in 2013. I got my C1 DELE certificate in 2016. I have lived and worked in Spain for 9 years and am now proficient in the language'
  },
  {
    language: 'Afrikaans',
    level: 4,
    comments:
      'I was brought up in an Afrikaans town by bilingual parents. I studied in and worked in Afrikaans in the Limpopo province of South Africa for two years.'
  },
  {
    language: 'Dutch',
    level: 2,
    comments:
      'I learned Dutch while living in Amsterdam for 9 months. I am amble to maintain basic conversations and I can read and understand the language well.'
  }
]

export const createLanguageDivs = () => {
  const languageSection = document.createElement('section')
  const dropDownText = document.createElement('p')

  languageSection.className = 'languageSection'
  dropDownText.className = 'dropDownText'
  dropDownText.innerText = 'Click on arrows to see more'

  languageSection.append(dropDownText)

  for (const languageSkill of languageSkills) {
    const individualLanguageDiv = document.createElement('div')
    const languageDotsDiv = document.createElement('div')
    const dropDownButton = document.createElement('button')
    const dropDown = document.createElement('img')
    const language = document.createElement('h3')
    const comments = document.createElement('p')
    const levelDots = createLevelDots(languageSkill)

    individualLanguageDiv.className = 'individualLanguageDiv'
    dropDownButton.className = 'dropDownButton'
    dropDown.className = 'dropDown'
    dropDown.src = '/icons/dropDown.png'
    language.className = 'language'
    language.innerText = languageSkill.language
    comments.innerText = languageSkill.comments
    languageDotsDiv.className = 'languageDotsDiv'

    comments.classList.add('comments', 'hide')

    // dropDownButton.addEventListener('click', function (event) {
    //   if (comments.classList.contains('hide')) {
    //     comments.classList.remove('hide')
    //   } else {
    //     comments.classList.add('hide')
    //   }

    //   if (dropDown.classList.contains('dropDownClicked')) {
    //     dropDown.classList.remove('dropDownClicked')
    //     dropDown.classList.add('dropDownNotClicked')
    //   } else {
    //     dropDown.classList.remove('dropDownNotClicked')
    //     dropDown.classList.add('dropDownClicked')
    //   }
    // })

    dropDownButton.append(dropDown)
    languageDotsDiv.append(dropDownButton)
    languageDotsDiv.append(language)
    languageDotsDiv.append(levelDots)
    individualLanguageDiv.append(languageDotsDiv)
    individualLanguageDiv.append(comments)
    languageSection.append(individualLanguageDiv)
  }

  showDropdownContent(languageSection)
  return languageSection
}

const createLevelDots = (languageSkill) => {
  const dotsContainerA = document.createElement('div')

  const proficiency = languageSkill.level
  const dotsContainer = document.createElement('div')
  dotsContainer.className = 'dotsContainer'

  for (let i = 0; i <= 4; i++) {
    const level = document.createElement('div')
    level.className = 'level'
    if (proficiency > i) {
      level.classList.add('fill')
    }
    dotsContainer.append(level)
  }
  dotsContainerA.append(dotsContainer)

  return dotsContainerA
}

export const showDropdownContent = (languageSection) => {
  const languageDivs = languageSection.querySelectorAll(
    '.individualLanguageDiv'
  )
  const allComments = languageSection.querySelectorAll('.comments')
  const dropDownImgs = languageSection.querySelectorAll('.dropDown')

  languageDivs.forEach((div) => {
    const comment = div.querySelector('.comments')
    const dropDownButton = div.querySelector('.dropDownButton')
    const dropDownImg = div.querySelector('.dropDown')

    dropDownButton.addEventListener('click', () => {
      if (dropDownImg.classList.contains('dropDownClicked')) {
        dropDownImg.classList.remove('dropDownClicked')
        comment.classList.remove('commentsVisible')
      } else {
        dropDownImgs.forEach((dropDown) => {
          dropDown.classList.remove('dropDownClicked')
          dropDown.classList.add('dropDownNotClicked')
        })
        dropDownImg.classList.add('dropDownClicked')
        allComments.forEach((comment) => {
          comment.classList.remove('commentsVisible')
        })

        comment.classList.add('commentsVisible')
      }
    })
  })
}
