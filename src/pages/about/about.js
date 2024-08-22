import { aboutTexts } from "../../informationArrays/aboutTexts"
import "./about.css"

export const about = () => {
  const aboutSection = document.createElement("section")
  const aboutDiv = document.createElement("div")
  const title = document.createElement("h1")
  const imgHiking = document.createElement("img")

  aboutSection.id = "aboutSection"
  aboutSection.classList.add("hide", "aboutSection")
  aboutDiv.className = "aboutDiv"

  title.textContent = "Hi, I’m Lydon Alves"
  title.className = "aboutTitle"

  imgHiking.src = "/mountainPic2.jpg"
  imgHiking.className = "imgHiking"

  aboutDiv.append(title)

  aboutTexts.forEach(text => {
    const textElement = document.createElement("p")
    textElement.className = "aboutPageTexts"
    textElement.innerText = text
    aboutDiv.append(textElement)
  })


  aboutSection.append(aboutDiv)
  aboutSection.append(imgHiking)
  return aboutSection
}