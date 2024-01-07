import './contacts.css'

const contactMethods = [
  {
    network: 'mobile',
    details: '+34 665 112 221',
    imgLink: './public/icons/phone.png'
  },
  {
    network: 'email',
    details: 'getit@gmail.com',
    imgLink: './public/icons/mail.png'
  },
  {
    network: 'linkedIn',
    details: 'linkedin.com/in/lydon-alves-7b396a81/',
    imgLink: './public/icons/linkedIn.png'
  },
  {
    network: 'location',
    details: 'Granada, Spain',
    imgLink: './public/icons/location-pointer.png'
  }
]

export const createContactMethods = () => {
  const contactMethodSection = document.createElement('section')
  contactMethodSection.className = 'contactMethodSection'

  for (const object of contactMethods) {
    const contactMethodDiv = document.createElement('div')
    const contactMethodImg = document.createElement('img')
    const contactMethodText = document.createElement('p')

    contactMethodDiv.className = 'contactMethodDiv'
    contactMethodImg.src = object.imgLink
    contactMethodImg.className = 'contactMethodImg'
    contactMethodText.innerText = object.details
    contactMethodText.className = 'contactMethodText'

    contactMethodDiv.append(contactMethodImg)
    contactMethodDiv.append(contactMethodText)
    contactMethodSection.append(contactMethodDiv)
  }
  return contactMethodSection
}
