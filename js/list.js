export class Article {
    constructor(name, file, date) {
        this.name = name;
        this.file = file;
    }
}


/**
 * @type {Article[]}
 */
export const articleList = [
    new Article("Welcome", "welcome.html"),
];
