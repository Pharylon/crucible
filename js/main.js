import { articleList } from "./list.js";
import { hideMenu } from "./menu-button.js";
async function main() {
    if (window.location.hash && window.location.hash.length > 1) {
        await loadFromHash();
    }
    setMenuItems("menu-items");
    setMenuItems("menu-button-items");
}
function setMenuItems(menuId) {
    const menuItems = document.getElementById(menuId);
    if (menuItems) {
        menuItems.innerText = "";
        menuItems.appendChild(getLinkItem("Home", "#"));
        articleList.map((a) => {
            const li = getLinkItem(a.name);
            menuItems.appendChild(li);
        });
    }
}
function getLinkItem(name, link) {
    const a = document.createElement("a");
    a.href = link || ("#/" + getSafeTitle(name));
    a.innerText = name;
    const li = document.createElement("li");
    li.appendChild(a);
    return li;
}
function getArticleDiv(title, html) {
    const articleWrapper = document.createElement("div");
    articleWrapper.id = getSafeTitle(title);
    articleWrapper.innerHTML = html;
    articleWrapper.appendChild(document.createElement("hr"));
    articleWrapper.classList.add("article");
    return articleWrapper;
}
function getSafeTitle(title) {
    title = title.replace(/\s/g, "_");
    title = title.replace(/&/g, "n");
    return encodeURIComponent(title);
}
async function getArticleHtml(fileDir) {
    const response = await fetch("./articles/" + fileDir);
    if (response.status === 200) {
        const html = await response.text();
        return html;
    }
    else {
        return "";
    }
}
async function loadArticle(title) {
    console.log("Loading", title)
    const articleDiv = document.getElementById("articles");
    if (!articleDiv) {
        return;
    }
    const articleEntry = articleList.find(x => getSafeTitle(x.name) === title);
    if (!articleEntry) {
        navigateHome();
    }
    const html = await getArticleHtml(articleEntry.file);
    const articleWrapper = getArticleDiv(articleEntry.name, html);
    articleWrapper.id = title;
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
    window.history.pushState({}, "", "/#/");
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
main();
