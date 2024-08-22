import './contacts.css'

const contactMethods = [
  {
    network: 'mobile',
    details: '+34 665 112 221',
    imgLink: '/icons/phone.png'
  },
  {
    network: 'email',
    details: 'lydonalves@gmail.com',
    imgLink: '/icons/mail.png'
  },
  {
    network: 'linkedIn',
    details: 'linkedin.com/in/lydon-alves-7b396a81/',
    imgLink: '/icons/linkedIn.png'
  },
  {
    network: 'location',
    details: 'Granada, Spain',
    imgLink: '/icons/location-pointer.png'
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



    let href;
    let isCopyable = false;
    switch (object.network) {
      case 'mobile':
        href = `tel:${object.details}`;
        isCopyable = true;
        break;
      case 'email':
        href = `mailto:${object.details}`;
        isCopyable = true;
        break;
      case 'linkedIn':
        href = `https://${object.details}`;
        break;
      case 'location':
        href = null;
        break;
      default:
        href = null;
    }

    if (href && isCopyable) {
      const contactMethodLink = document.createElement('a')
      contactMethodLink.href = href
      contactMethodLink.className = 'contactMethodLink'
      contactMethodLink.target = '_blank'

      contactMethodLink.addEventListener('click', (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(object.details)
          .then(() => alert(`${object.network.charAt(0).toUpperCase() + object.network.slice(1)} copied to clipboard`))
          .catch(err => console.error('Failed to copy text: ', err));
      });

      contactMethodLink.append(contactMethodImg)
      contactMethodLink.append(contactMethodText)
      contactMethodDiv.append(contactMethodLink)
    } else if (href) {
      const contactMethodLink = document.createElement('a')
      contactMethodLink.href = href
      contactMethodLink.className = 'contactMethodLink'
      contactMethodLink.target = '_blank'

      contactMethodLink.append(contactMethodImg)
      contactMethodLink.append(contactMethodText)
      contactMethodDiv.append(contactMethodLink)
    } else {
      contactMethodDiv.append(contactMethodImg)
      contactMethodDiv.append(contactMethodText)
    }

    contactMethodSection.append(contactMethodDiv)
  }
  return contactMethodSection
}
