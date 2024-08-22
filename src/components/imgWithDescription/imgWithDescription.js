import "./imgWithDescription.css"

export const imageWithDescription = (item) => {
  const { heading, imgDescriptions } = item

  const divdone = document.getElementById('contentDiv')

  const imgCarrouselContainer = document.createElement('div');
  imgCarrouselContainer.className = "imgCarrouselContainer"


  const imgCarrouselDiv = document.createElement('div');
  imgCarrouselDiv.className = "imgCarrouselDiv"

  const imgCarrouselTitle = document.createElement('p');
  imgCarrouselTitle.textContent = heading;
  imgCarrouselTitle.className = "imgCarrouselTitle"

  const imgCarrouselUl = document.createElement('ul')
  imgCarrouselUl.className = "imgCarrouselUl"

  imgDescriptions.map(item => {
    const imgDescriptionLi = document.createElement('li');
    imgDescriptionLi.className = "descriptionLi"

    const imgDescriptionDiv = document.createElement("div")
    imgDescriptionDiv.className = "imgDescriptionDiv"

    const imgElement = document.createElement('img');
    imgElement.className = "imgElement"
    imgElement.src = item.img;
    imgElement.alt = 'Placeholder Image';

    const imgDescription = document.createElement('p');
    imgDescription.className = "imgDescription"
    imgDescription.textContent = item.description;

    imgDescriptionDiv.append(imgElement)
    imgDescriptionLi.append(imgDescriptionDiv)
    imgDescriptionLi.append(imgDescription)
    imgCarrouselUl.appendChild(imgDescriptionLi);
  })


  imgCarrouselContainer.appendChild(imgCarrouselTitle);
  imgCarrouselDiv.appendChild(imgCarrouselUl);
  imgCarrouselContainer.appendChild(imgCarrouselDiv)
  divdone.appendChild(imgCarrouselContainer)
}