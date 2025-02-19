import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.characterService.create(createCharacterDto);
  }

  @Get()
  @UseGuards(AdminAuthGuard)
  findAll() {
    return this.characterService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.characterService.findOne(id);
  }

  @Get('/user/:userId')
  @UseGuards(AuthGuard)
  findByUserId(@Param('userId') userId: string) {
    return this.characterService.findByUserId(userId);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateCharacterDto: UpdateCharacterDto,
  ) {
    return this.characterService.update(id, updateCharacterDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.characterService.remove(id);
  }
}
