import "./detailedViewProject.css"
import { projectData } from "../../informationArrays/projectData";
import { imageWithDescription } from "../imgWithDescription/imgWithDescription";

export const detailedViewProject = (id) => {
  const chosenProject = projectData.find(item => item.id === id)

  const { projectName, coverImg, tech, prerequisits, solution, examples } = chosenProject

  const projectsContainer = document.getElementById("generalInfo")
  const detailedViewDiv = document.createElement('div')
  detailedViewDiv.className = "detailedViewDiv"

  const contentDiv = document.createElement('div');
  contentDiv.id = "contentDiv"

  const closeButton = document.createElement("button")
  closeButton.type = 'button';
  closeButton.className = 'closeButton';

  const closeImg = document.createElement('img');
  closeImg.src = "/closeImg.png";
  closeImg.alt = 'Close';
  closeImg.className = 'closeImg';


  const title = document.createElement('h1');
  title.className = "titleDetailedView"
  title.textContent = projectName;

  const techDetailedView = document.createElement('p');
  techDetailedView.className = "techDetailedView"
  techDetailedView.textContent = tech;

  const projectSpecsDiv = document.createElement("div")
  projectSpecsDiv.className = "projectSpecsDiv"

  const prerequisitsDiv = document.createElement("div")
  prerequisitsDiv.className = "prerequisitsDiv"

  const prerequisitsTitle = document.createElement('p');
  prerequisitsTitle.className = "prerequisitsTitle"
  prerequisitsTitle.textContent = "Prerequisites for the project";

  const mySolutionDiv = document.createElement("div")
  mySolutionDiv.className = "mySolutionDiv"

  const mySolutionTitle = document.createElement('p');
  mySolutionTitle.className = "mySolutionTitle"
  mySolutionTitle.textContent = "My solution";

  const mySoloution = document.createElement('p');
  mySoloution.className = "mySoloution"
  mySoloution.textContent = solution;


  const ulPrerequisits = document.createElement('ul');
  ulPrerequisits.className = "ulPrerequisits"


  const imageDiv = document.createElement('div');
  imageDiv.className = 'imageDiv';

  const img = document.createElement('img');
  img.src = coverImg;
  img.alt = 'Cover Image'
  img.className = 'imageDetailedView';


  prerequisits.map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.className = "liPrerequisits"
    ulPrerequisits.appendChild(li);
  })


  closeButton.addEventListener('click', () => {
    detailedViewDiv.remove()
  })



  closeButton.append(closeImg)
  contentDiv.appendChild(title)
  contentDiv.appendChild(techDetailedView)
  if (coverImg !== "") {
    imageDiv.appendChild(img)
    contentDiv.appendChild(imageDiv)
  }
  contentDiv.appendChild(projectSpecsDiv)
  prerequisitsDiv.appendChild(prerequisitsTitle)
  prerequisitsDiv.appendChild(ulPrerequisits)
  mySolutionDiv.appendChild(mySolutionTitle)
  mySolutionDiv.appendChild(mySoloution)
  projectSpecsDiv.appendChild(prerequisitsDiv)
  projectSpecsDiv.appendChild(mySolutionDiv)
  contentDiv.appendChild(projectSpecsDiv)

  detailedViewDiv.append(closeButton)
  detailedViewDiv.appendChild(contentDiv)

  if (chosenProject) {
    projectsContainer.appendChild(detailedViewDiv)
  }



  if (examples.length > 0) {
    examples.forEach(item =>
      imageWithDescription(item)
    )
  }
}


