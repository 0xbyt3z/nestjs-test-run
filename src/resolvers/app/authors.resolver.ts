import { Query, Resolver } from '@nestjs/graphql';
import { AuthorsService } from 'src/services/authors.service';

@Resolver(() => String)
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query(() => String)
  async authors() {
    return this.authorsService.findAll();
  }

  @Query(() => String)
  async this() {
    return JSON.stringify({ 1: 'a', 2: 'b', 3: 'c' });
  }

  @Query(() => String)
  async that() {
    return ['ab', '12'].toString();
  }
}
