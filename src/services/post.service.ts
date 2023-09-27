import { Injectable, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class PostService {
  fileStream(filepath: string) {
    const file = createReadStream(join(process.cwd(), filepath));
    return new StreamableFile(file);
  }
}
