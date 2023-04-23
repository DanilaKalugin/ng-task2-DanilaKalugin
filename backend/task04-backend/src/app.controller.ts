import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

import { InMemoryDBService } from '@nestjs-addons/in-memory-db'
import { CardEntity } from 'models/card.entity';

@Controller()
export class AppController {
  constructor(private readonly dbService: InMemoryDBService<CardEntity>) {}

  @Get()
  getAll(): CardEntity[] {
    return this.dbService.getAll();
  }

  @Post()
  createCard(@Body() dto: Partial<CardEntity>): CardEntity {
    return this.dbService.create(dto);
  }
  
  @Delete(':id')
  delete(@Param('id') id: string): void {
    return this.dbService.delete(id);
  }

  @Post('/seed')
  seed(): CardEntity[] {
    this.dbService.seed((idx: number) => ({
      id: String(idx + 1),
      title: `Purchase-${idx + 1}`,
      description: `d${idx}`
    }))

    return this.dbService.getAll();
  }
}
