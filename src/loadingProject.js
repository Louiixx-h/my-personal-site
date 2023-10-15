import {projects} from "./projectsDataSource.js"

const IMAGE_PATH = "../images/projects/"

function addProjectsOn(projectContainer) {
    projects.forEach(element => {
        projectContainer.appendChild(createProjectElement(element))
    });
}

function createProjectElement(projectInfo) {
    const projectDiv = document.createElement("div")
    const image = document.createElement("img")
    const labelContainer = document.createElement("div")
    const labelProject = document.createElement("p")
    const title = document.createElement("h2")
    const linkContainer = document.createElement("a")
    const button = document.createElement("button")

    projectDiv.setAttribute("class", "project-item")
    image.setAttribute("src", IMAGE_PATH + projectInfo.image)
    labelContainer.setAttribute("class", "label-container")
    labelProject.setAttribute("class", `label-project ${projectInfo.tag}`)
    title.setAttribute("class", "title")
    linkContainer.setAttribute("href", projectInfo.button.link)
    linkContainer.setAttribute("target", "_blank")
    button.setAttribute("class", "primary-button see-project")

    labelProject.textContent = projectInfo.tag
    title.textContent = projectInfo.title
    button.textContent = projectInfo.button.text

    labelContainer.appendChild(labelProject)
    linkContainer.appendChild(button)

    projectDiv.appendChild(image)
    projectDiv.appendChild(labelContainer)
    projectDiv.appendChild(title)
    projectDiv.appendChild(linkContainer)

    return projectDiv
}


const projectContainer = document.querySelector("#project-content")
addProjectsOn(projectContainer)