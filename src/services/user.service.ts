import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User, Prisma } from '@prisma/client';
import { GetUserInput } from 'src/resolvers/inputs/user.input';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(id: GetUserInput) {
    return this.prisma.user.findUnique({
      where: { id: id.id },
    });
  }

  async users(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }
}
