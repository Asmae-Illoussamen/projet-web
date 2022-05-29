const {faker} = require('@faker-js/faker') ;
var {PrismaClient} = require('@prisma/client')
var prisma=new PrismaClient();

var { User } = prisma.user;
var { Article } = prisma.article;
var { Categorie } = prisma.categorie;
var { Commentaire } = prisma.commentaire;

function test() {
    console.log(User)
}


        /**************** USERS ****************/
 function getAllUsers() {
     console.log(User)
    return User.findMany();
}

function getUsers(skip = 0, take = 10) {
    return User.findMany({
        skip: skip,
        take: take,
    });
}
function getAdmins() {
    return User.findMany({
        where: { role: "admin" }
    });
}
function getAuthors() {
    return User.findMany({
        where: { role: "author" }
    });
}
function getUser(id) {
    return User.findUnique({
        where: {
            id: id
        }
    })
}
function addUser(newuser) {
    User.create(newuser)
}
function updateUser(id, newdata) {
    User.update(newdata, { where: { id: id } })
}
function deleteUser(id) {
    User.delete({ where: { id: id } })
}

        /**************** ARTICLES ****************/
function getAllArticles() {
    return Article.findMany();
}
function getArticles(skip = 0, take = 10) {
    return Article.findMany({
        skip: skip,
        take: take,
    });
}
function getArticle(id) {
    return Article.findUnique({
        where: {
            id: id
        }
    })
}
function addArticle(newuser) {
    Article.create(newuarticle)
}
function updateArticle(id, newdata) {
    Article.update(newdata, { where: { id: id } })
}
function deleteArticle(id) {
    Article.delete({ where: { id: id } })
}

        /**************** CATEGORIES ****************/
function getAllCategories() {
    return Categorie.findMany();
}
function getCategories(skip = 0, take = 10) {
    return Categorie.findMany({
        skip: skip,
        take: take,
    });
}
function getCategorie(id) {
    return Categorie.findUnique({
        where: {
            id: id
        }
    })
}
function addCategorie(newuser) {
    Categorie.create(newuser)
}
function updateCategorie(id, newdata) {
    Categorie.update(newdata, { where: { id: id } })
}
function deleteCategorie(id) {
    Categorie.delete({ where: { id: id } })
}

        /**************** COMMENTAIRES ****************/
function getAllCommentaires() {
     return Commentaire.findMany();
}
function getCommentaires(skip = 0, take = 10) {
    return Commentaire.findMany({
                skip: skip,
                take: take,
    });
}
function getCommentaire(id) {
    return Commentaire.findUnique({
        where: {
            id: id
        }
    })
}
 function addCommentaire(newuser) {
    Commentaire.create(newuser)
}
function updateCommentaire(id, newdata) {
    Commentaire.update(newdata, { where: { id: id } })
}
function deleteCommentaire(id) {
    Commentaire.delete({ where: { id: id } })
}
