import { Injectable } from '@nestjs/common';
import { AuthorsDTO } from './dto/authors.dto';
import { AuthorArgs } from './dto/authors.args';
import { Author } from '../models/authors.model';

@Injectable()
export class AuthorsService {
  async create(data: AuthorsDTO): Promise<Author> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Author> {
    return {} as any;
  }

  async findAll(): Promise<string> {
    return 'Here are all the authors';
    // return [] as Author[];
  }

  async remove(id: string): Promise<boolean> {
    //if the operation succeed
    return true;
  }
}
