import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Post, Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async post(id: any): Promise<Post> {
    return await this.prisma.post.findUnique({ where: { id: 1 } });
  }

  async posts(): Promise<Post[]> {
    const test = await this.prisma.post.findMany({});
    return test;
  }

  async publishPost(id: any): Promise<Post> {
    return await this.prisma.post.update({
      where: { id: 1 },
      data: { published: true },
    });
  }
}
