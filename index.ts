import { PrismaClient } from "@prisma/client";
import { title } from "process";

// COMMANDS
// npx ts-node index.ts
// npx prisma studio


const prisma = new PrismaClient();


async function main() {

    // Create user
    // const user = await prisma.user.create({
    //     data : {
    //         name: 'John doe',
    //         email: "john1@gmail.com"
    //     }
    // })
    // console.log(user)

    // Get all users
    // const users = await prisma.user.findMany();
    // console.log(users)

    // Create article and associate it with user
    // const article =  await prisma.article.create({
    //     data: {
    //         title: 'Johns First article',
    //         body: 'This is Johns first artlcle',
    //         author: {
    //             connect : {
    //                 id: 2 // ID of user
    //             }
    //         }
    //     }
    // })
    // console.log(article)

    // Get all articles 
    // const articles =  await prisma.article.findMany();
    // console.log(articles)

    // Create user and article and associate them
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Sara Smith',
    //         email: 'sara@gmail.com',
    //         articles: {
    //             create: {
    //                 title: 'Saras first article',
    //                 body: 'This is saras first article'
    //             }
    //         }
    //     }
    // })
    // console.log(user)

    // Get users with associated model, here in this case articles
    // const users = await prisma.user.findMany({
    //     include: {
    //         articles: true
    //     }
    // });
    // console.log(users)

    // Create another article
    // const article = await prisma.article.create({
    //     data : {
    //         title: 'Sample Article',
    //         body: 'This is a sample article',
    //         author: {
    //             connect: {
    //                 id: 2
    //             }
    //         }
    //     }
    // })
    // console.log(article)

    // Loop over Saras articles
    // const users = await prisma.user.findMany({
    //     include: {
    //         articles: true
    //     }
    // });
    // users.forEach((user) => {
    //     console.log(`User: ${user.name}, Email: ${user.email}`)
    //     console.log('Artic;es:');
    //     user.articles.forEach((article) => {
    //         console.log(`- Title: ${article.title}, Body ${article.body}}`)
    //     })
    //     console.log(`\n`)
    // })

    // Update data
    // const user = await prisma.user.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         name: "John Doe Jr"
    //     }
    // })
    // console.log(user)

    // Remove data
    // const article = await prisma.article.delete({
    //     where: {
    //         id: 2 // Remove article with id 2
    //     }
    // })
    // console.log(article)

    // Get Partiicular user
    // const user  = await prisma.user.findUnique({
    //     where: {
    //         id: 2
    //     }
    // })
    // console.log(user)

}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect();
    process.exit(1);
})