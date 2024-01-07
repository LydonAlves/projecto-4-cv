import './education.css'

const courses = [
  {
    course: 'Introduction to Python',
    provider: 'CodeAcademy',
    period: '8 weeks',
    image:
      'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/andalucia/alhambra-granada-20044065-istock.jpg_1014274486.jpg'
  },
  {
    course: 'Advanced Java Programming',
    provider: 'Udemy',
    period: '12 weeks',
    image:
      'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/andalucia/alhambra-granada-20044065-istock.jpg_1014274486.jpg'
  },
  {
    course: 'Web Development Fundamentals',
    provider: 'Coursera',
    period: '10 weeks',
    image:
      'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/andalucia/alhambra-granada-20044065-istock.jpg_1014274486.jpg'
  },
  {
    course: 'Machine Learning Basics',
    provider: 'edX',
    period: '15 weeks',
    image:
      'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/andalucia/alhambra-granada-20044065-istock.jpg_1014274486.jpg'
  }
]

export const createEducationCards = () => {
  const educationCardsSection = document.createElement('section')
  const educationCardsDiv = document.createElement('div')

  educationCardsSection.id = 'educationId'
  educationCardsSection.className = 'educationCardsSection'
  educationCardsDiv.className = 'educationCardsDiv'

  educationCardsSection.append(educationCardsDiv)

  for (const course of courses) {
    const courseDiv = document.createElement('div')
    const courseImg = document.createElement('img')
    const courseName = document.createElement('h4')
    const courseProvider = document.createElement('p')
    const coursePeriod = document.createElement('p')

    courseImg.className = 'courseImg'
    courseImg.src = course.image
    courseDiv.className = 'courseDiv'
    courseName.innerText = course.course
    courseName.className = 'courseName'
    courseProvider.innerText = course.provider
    coursePeriod.innerText = course.period

    courseDiv.append(courseImg)
    courseDiv.append(courseName)
    courseDiv.append(courseProvider)
    courseDiv.append(coursePeriod)
    educationCardsDiv.append(courseDiv)
  }

  return educationCardsSection
}
