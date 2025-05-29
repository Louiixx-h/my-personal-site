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
    const labelProject = document.createElement("p")
    const title = document.createElement("h2")
    const linkContainer = document.createElement("a")

    projectDiv.setAttribute("class", "project-item")
    image.setAttribute("src", IMAGE_PATH + projectInfo.image)
    descriptionContaienr.setAttribute("class", "project-description-container")
    labelContainer.setAttribute("class", "label-container")
    labelProject.setAttribute("class", `label-project`)
    title.setAttribute("class", "title")
    linkContainer.setAttribute("href", projectInfo.button.link)
    linkContainer.setAttribute("target", "_blank")

    labelProject.textContent = projectInfo.tag.toUpperCase()
    title.textContent = projectInfo.title

    labelContainer.appendChild(labelProject)

    projectDiv.appendChild(image)
    projectDiv.appendChild(descriptionContaienr)
    descriptionContaienr.appendChild(title)
    descriptionContaienr.appendChild(labelContainer)
    descriptionContaienr.appendChild(linkContainer)

    return projectDiv
}


const projectContainer = document.querySelector("#project-content")
addProjectsOn(projectContainer)