import { features, hunting, evolution, latestData } from "./data.js"


// links
let links = document.querySelectorAll('span')
let titleDocument = document.getElementById('title')
let paragraphDocument = document.getElementById('paragraph')


//Add a element click for each link
links.forEach(function (link) {
    link.addEventListener('click', function () {
        links.forEach(function (link) {
            link.classList.remove('active') //Removing the class active of link
        });

        this.classList.add('active')

        // Obtain the values of the function  getContent
        let content = getContent(this.textContent)

        titleDocument.innerHTML = content.title
        paragraphDocument.innerHTML = content.paragraph

    });


});


function getContent(link) {
    let content = {
        'Rasgos': features,
        'Técnica de Caza': hunting,
        'Evolución': evolution,
        'Ultimos datos': latestData,
    }; return content[link];

}
