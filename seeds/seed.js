const {faker} = require('@faker-js/faker') ;
const {PrismaClient} = require('@prisma/client')
const prisma=new PrismaClient();
const dotenv = require('dotenv')

async function clear() {
  await prisma.commentaire.deleteMany()
  await prisma.article.deleteMany()
  await prisma.user.deleteMany()
  await prisma.categorie.deleteMany()
}

const fakerAuthors = () => ({
  name: faker.name.firstName() + faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: 'AUTHOR',
})

const fakerAdmins = () => ({
  name: faker.name.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: 'ADMIN',
})


const getRandomCategory = async() => {
  const categories = await prisma.categorie.findMany({})
  const randomCategory =
      categories[Math.floor(Math.random() * categories.length)]
  return randomCategory
}


const getRandomUser = async() => {
  const users = await prisma.user.findMany({})
  const randomUser = users[Math.floor(Math.random() * users.length)]
  return randomUser
}


const fakerArticles = async(user) => (
  {
  titre: faker.lorem.sentence(),
  contenu: faker.lorem.paragraph(),
  image: faker.image.imageUrl(),
  published: true,
  //author: user,
  authorId: user.id,
  updatedAt: new Date(),
  categories: (await getRandomCategory()),
  
})

const fakerComments = (artId) => ({
  contenu: faker.lorem.sentence(),
  articleId: artId,
})


async function main(){
 
  const fakerAuthorsRounds = 10
  const fakerAdminsRounds = 1
  const fakerCategoriesRounds = 10
  const fakerArticlesRounds = 100
  dotenv.config()
  console.log('Seeding...')
  await clear()

   /// --------- Authors ---------------
   for (let i = 0; i < fakerAuthorsRounds; i++) {
    await prisma.user.create({ data: fakerAuthors() })
}

/// --------- Admins ---------------
for (let i = 0; i < fakerAdminsRounds; i++) {
  await prisma.user.create({ data: fakerAdmins() })
}
     /*--------- Categories ---------------*/

     for (let i = 0; i < fakerCategoriesRounds; i++) {
      await prisma.categorie.create({ data: { name: faker.word.adverb(6) } })
  }


    /*--------- Articles ---------------*/
    for (let i = 0; i < fakerArticlesRounds; i++) {
    const user = await getRandomUser(); 

      await prisma.article.create({ data: await fakerArticles(user) })
  }
      /// --------- Comments ---------------
      const articles = await prisma.article.findMany()
      for (let i = 0; i < articles.length; i++) {
          const numberOfComments = Math.floor(Math.random() * 20)
          for (let j = 0; j < numberOfComments; j++) {
              await prisma.commentaire.create({ data: fakerComments(articles[i].id) })
          }
      }

}


main()
  .catch((e)=>{
    console.error(e);
    process.exit(1);
  })
  .finally(async()=>{
    await prisma.$disconnect();
  });


