import { projects } from "./data/project_card_data_source.js";

const IMAGE_PATH = "../images/projects/"

function addProjectsOn(projectContainer) {
    projects.forEach(element => {
        projectContainer.appendChild(createProjectElement(element))
    });
}

function createProjectElement(projectInfo) {
    const projectDiv = document.createElement("div")
    const image = document.createElement("img")
    const descriptionContaienr = document.createElement("div")
    const labelContainer = document.createElement("div")
    const textContainer = document.createElement("div")
    const title = document.createElement("h2")
    const description = document.createElement("p")
    const labelProject = document.createElement("p")
    const linkContainer = document.createElement("a")

    projectDiv.setAttribute("class", "project-item")
    descriptionContaienr.setAttribute("class", "project-description-container")
    labelContainer.setAttribute("class", "label-container")
    labelProject.setAttribute("class", `label-project`)
    textContainer.setAttribute("class", "text-container")
    title.setAttribute("class", "title")
    description.setAttribute("class", "description")
    linkContainer.setAttribute("target", "_blank")

    image.setAttribute("src", IMAGE_PATH + projectInfo.image)
    linkContainer.setAttribute("href", projectInfo.button.link)
    labelProject.textContent = projectInfo.tag.toUpperCase()
    title.textContent = projectInfo.title
    description.textContent = projectInfo.description

    labelContainer.appendChild(labelProject)
    projectDiv.appendChild(image)
    projectDiv.appendChild(descriptionContaienr)
    descriptionContaienr.appendChild(textContainer)
    textContainer.appendChild(title)
    textContainer.appendChild(description)
    descriptionContaienr.appendChild(labelContainer)

    return projectDiv
}


const projectContainer = document.querySelector("#project-content")
addProjectsOn(projectContainer)