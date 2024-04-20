import {
  Args,
  Float,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { UserService } from 'src/services/user.service';
import { PostService } from 'src/services/post.service';
import { Post, User } from 'src/models/all.model';
import { GetUserInput } from '../inputs/user.input';

@Resolver()
export class AppResolver {
  constructor(
    private userService: UserService,
    private postService: PostService,
  ) {}

  @Query(() => User)
  async user(@Args({ name: 'id', type: () => GetUserInput }) id: GetUserInput) {
    return this.userService.user(id);
  }

  @Query(() => Post)
  async post(@Args('id') id: number) {
    return this.postService.posts;
  }

  @Query(() => [Post])
  async allPosts() {
    return this.postService.posts;
  }

  @Mutation((returns) => Post)
  async publishPost(@Args('id') id: number) {
    return this.postService.publishPost(id);
  }
}
