import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  const posts = [
    { 
      articleSlug:'article-3',
      authorSlug:'ridley-davies',
      articleTitle: 'Article #3',
      author: 'Ridley Davies',
      markdown:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.`, 
    },
    { 
      articleSlug:'article-2',
      authorSlug:'ridley-davies',
      articleTitle: 'Article #2',
      author: 'Ridley Davies',
      markdown:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.`,
    },
    {
      articleSlug:'article-1',
      authorSlug:'ridley-davies',
      articleTitle: 'Article #1',
      author: 'Ridley Davies',
      markdown:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.`,
    }
  ];

  for (const post of posts) {
    await prisma.post.upsert({
      where: { articleSlug: post.articleSlug },
      update: post,
      create: post,
    });
  }

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
