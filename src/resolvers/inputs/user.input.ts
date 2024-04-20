import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class GetUserInput {
  @Field(() => Float)
  id: number;
}
