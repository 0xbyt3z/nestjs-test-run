import { Controller, Get, Header } from '@nestjs/common';
import { FileService } from 'src/services/file.service';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get('file-stream')
  @Header('Content-Type', 'application/json')
  //follow this link if it is required to change the attachement name on the go
  //https://docs.nestjs.com/techniques/streaming-files#example
  @Header('Content-Disposition', 'attachment; filename="package.json"')
  getStream(): any {
    return this.fileService.fileStream('package.json');
  }
}
