import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  name?: string;

  @Field((type) => [Post])
  posts: Post[];
}

@ObjectType()
export class Post {
  @Field((type) => Int)
  id: number;

  @Field((type) => Int)
  authorId: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  content?: string;

  @Field({ nullable: true })
  published?: boolean;

  @Field((type) => [User])
  author: User[];
}
