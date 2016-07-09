// This just sets the HTML title for the page
(function setHeadTitle(document) {
    let htmlHeadTitle: string = "LMC - Semantic";
    let titleElement: HTMLElement = document.getElementsByTagName("title")[0];
    titleElement.textContent = htmlHeadTitle;
})(document);

// Here we bring in the module which will in turn bootstraps our application
System.import('./dist/config/bootstrapper')
    .then(null, console.error.bind(console));