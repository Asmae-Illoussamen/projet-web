import faker from "faker";
const {PrismaClient} = require('@prisma/client')
const prisma=new PrismaClient();

async function main(){
 
  await prisma.user.deleteMany();
  await prisma.categorie.deleteMany();

  const Authors=[];
  const categ =[];

  for(let i=0;i<10;i++){
    await prisma.user.create({
      data:{
        email : faker.internet.email(),
        name: faker.name.findName(),
        password: faker.internet.password() ,
        role:` AUTHOR`,
        /*articles: {
          create:[
            {name: faker.commerce.productName(), year:"2010" },
            {
              name: faker.datatype.uuid(),
              year:`20${Math.random().toFixed(2).substr(-2,2)}`,
            },
            ],
    },*/
},
});
}
/*
for(let i=0;i<10;i++){
await prisma.categorie.create({
    data:{
        name: faker.name.findName(), 
    }
})

}*/


}


main()
  .catch((e)=>{
    console.error(e);
    process.exit(1);
  })
  .finally(async()=>{
    await prisma.$disconnect();
  });


/*
//Create Users
const usersdata=[];
const roles=["admin","guest","author"];
const usersidtable=[]
for(let i=0;i<20;i++){
usersidtable[i]=i+1;
usersdata.push({
  username: faker.name.findName(),
  email : faker.internet.email(),
  password: faker.internet.password(),
  role :  roles[Math.floor(Math.random() * (3)) + 0],     
  createdAt: faker.date.between('2000-01-01', '2021-12-31'),
  updatedAt: new Date(),

})
*/

