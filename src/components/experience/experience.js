import './experience.css'

const jobs = [
  {
    title: 'Student Manager Sondela',
    type: 'Management',
    period: 'May 2010 - June 2021',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore magni magnam necessitatibus perspiciatis dolore aliquam maiores totam eligendi voluptatem odio aspernatur enim laboriosam fugiat ab recusandae dicta, soluta rerum et..'
  },
  {
    title: 'Teacher Sondela',
    type: 'Education',
    period: 'May 2010 - June 2021',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore magni magnam necessitatibus perspiciatis dolore aliquam maiores totam eligendi voluptatem odio aspernatur enim laboriosam fugiat ab recusandae dicta, soluta rerum et.'
  },
  {
    title: 'English teacher',
    type: 'Education',
    period: 'May 2010 - June 2021',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore magni magnam necessitatibus perspiciatis dolore aliquam maiores totam eligendi voluptatem odio aspernatur enim laboriosam fugiat ab recusandae dicta, soluta rerum et.'
  },
  {
    title: 'Assistent director of Studies',
    type: 'Manager',
    period: 'May 2010 - June 2021',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore magni magnam necessitatibus perspiciatis dolore aliquam maiores totam eligendi voluptatem odio aspernatur enim laboriosam fugiat ab recusandae dicta, soluta rerum et.'
  }
]

export const createExperienceCards = () => {
  const experienceCardSection = document.createElement('section')
  const cardDivContainer = document.createElement('div')

  experienceCardSection.id = 'experienceID'
  experienceCardSection.className = 'experienceCardSection'
  cardDivContainer.className = 'cardDivContainer'

  experienceCardSection.append(cardDivContainer)

  for (const job of jobs) {
    const cardDiv = document.createElement('div')
    const titleDiv = document.createElement('div')
    const title = document.createElement('h3')
    const typePeriodDiv = document.createElement('div')
    const period = document.createElement('p')
    const type = document.createElement('p')
    const description = document.createElement('p')
    const spanBorder = document.createElement('span')

    cardDiv.className = 'cardDiv'
    titleDiv.className = 'titleDiv'
    title.innerText = job.title
    title.className = 'jobTitle'
    typePeriodDiv.className = 'typePeriodDiv'
    period.innerText = job.period
    period.className = 'jobPeriod'
    type.innerText = job.type
    type.className = 'jobType'
    description.innerText = job.description
    description.className = 'experienceDescription'
    spanBorder.className = 'spanBorder'

    typePeriodDiv.append(type)
    typePeriodDiv.append(period)
    titleDiv.append(title)
    titleDiv.append(typePeriodDiv)
    cardDiv.append(titleDiv)
    cardDiv.append(description)
    cardDivContainer.append(cardDiv)
    cardDivContainer.append(spanBorder)
  }

  return experienceCardSection
}
