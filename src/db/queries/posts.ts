import type { Post } from "@prisma/client";
import { db } from "..";

export type PostWIthData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

// export type PostWIthData = Awaited<ReturnType<typeof fethPostsByTopicSlug>>[number]

export function fethPostsByTopicSlug(slug: string): Promise<PostWIthData[]> {
  return db.post.findMany({
    where: {
      topic: { slug },
    },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
}

export function fetchTopPosts(): Promise<PostWIthData[]> {
  return db.post.findMany({
    orderBy: [
      {
        comments: {
          _count: "desc",
        },
      },
    ],
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
    take: 4,
  });
}
