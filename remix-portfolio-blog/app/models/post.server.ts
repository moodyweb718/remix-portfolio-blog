import { prisma } from "~/db.server";

export async function getPosts() {
    return prisma.post.findMany();
}

export async function getPost(articleSlug:string) {
  return prisma.post.findUnique({where: {articleSlug}});
}