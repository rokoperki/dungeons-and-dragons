import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CharacterSchema,
  CreateCharacterDto,
} from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CharacterService {
  constructor(private prisma: PrismaService) {}

  async create(createCharacterDto: CreateCharacterDto) {
    try {
      CharacterSchema.parse(createCharacterDto);

      return await this.prisma.character.create({ data: createCharacterDto });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  findAll() {
    return this.prisma.character.findMany();
  }

  findOne(id: string) {
    return this.prisma.character.findUnique({ where: { id } });
  }

  async update(id: string, updateCharacterDto: UpdateCharacterDto) {
    try {
      CharacterSchema.parse(updateCharacterDto);

      return await this.prisma.character.update({
        where: { id },
        data: UpdateCharacterDto,
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  remove(id: string) {
    return this.prisma.character.delete({ where: { id } });
  }

  findByUserId(userId: string) {
    return this.prisma.character.findMany({ where: { userId } });
  }
}
