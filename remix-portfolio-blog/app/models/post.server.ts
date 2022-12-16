import { Post } from "@prisma/client";
import { prisma } from "~/db.server";

export async function getPosts() {
    return prisma.post.findMany();
}

export async function getPost(articleSlug:string) {
  return prisma.post.findUnique({where: {articleSlug}});
}

export async function createPost(post: Pick<Post, 'articleSlug' | 'articleTitle' | 'author' | 'authorSlug' | 'createdAt' | 'markdown' | 'updatedAt'>) {
  return prisma.post.create({ data: post })
}