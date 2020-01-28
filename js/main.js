import { hideMenu } from "./menu-button.js";

function getPathRoot(){
    let pathRoot = "/";
    pathRoot = window.location.pathname;
    if (!pathRoot.endsWith("/")){
        pathRoot += "/";
    }
    return pathRoot;    
}


async function main() {
    if (window.location.hash && window.location.hash.length > 1) {
        await loadFromHash();
    }
    else{
        console.log("Nav home from main");
        navigateHome();
    }
}

function getArticleDiv(html) {
    const articleWrapper = document.createElement("div");    articleWrapper.innerHTML = html;
    articleWrapper.appendChild(document.createElement("hr"));
    articleWrapper.classList.add("article");
    return articleWrapper;
}


/**
 * @param {string} fileDir
 */
async function getArticleHtml(fileDir) {
    if (!fileDir.endsWith(".html")){
        fileDir += ".html";
    }
    const response = await fetch("./articles/" + fileDir);
    if (response.status === 200) {
        const html = await response.text();
        return html;
    }
    else {
        return "";
    }
}

async function loadArticle(fileDir) {
    console.log("Loading", fileDir)
    if (!fileDir){
        console.log("Nav home");
        navigateHome();
        return;
    }
    const articleDiv = document.getElementById("articles");
    if (!articleDiv) {
        console.log("No Articles???");
        return;
    }
    // const articleEntry = articleList.find(x => getSafeTitle(x.name) === title);
    // if (!articleEntry) {
    //     navigateHome();
    // }
    const html = await getArticleHtml(fileDir);
    const articleWrapper = getArticleDiv(html);
    articleWrapper.id = fileDir;
    articleWrapper.innerHTML = html;
    articleDiv.innerText = "";
    articleDiv.appendChild(articleWrapper);
    document.getElementById("landing").style.display = "none";
    document.getElementById("article-wrap").style.display = "block";
}
async function loadFromHash() {
    const title = window.location.hash.substring(2);
    await loadArticle(title);
}
function navigateHome() {
    const articleDiv = document.getElementById("articles");
    const pathRoot = getPathRoot();
    window.history.pushState({}, "", `${pathRoot}#/`);
    document.getElementById("landing").style.display = "block";
    articleDiv.innerText = "";
    document.getElementById("article-wrap").style.display = "none";
    return;
}
window.addEventListener("hashchange", () => {
    console.log("Hashchange");
    hideMenu();
    if (window.location.hash && window.location.hash.length > 2) {
        loadFromHash();
    }
    else {
        navigateHome();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    main();
});