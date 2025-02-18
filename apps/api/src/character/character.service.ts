import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateCharacterDto,
  CreateCharacterSchema,
  UpdateCharacterSchema,
} from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CharacterService {
  constructor(private prisma: PrismaService) {}

  async create(createCharacterDto: CreateCharacterDto) {
    try {
      CreateCharacterSchema.parse(createCharacterDto);

      const characterData = {
        ...createCharacterDto,
        userId: createCharacterDto.userId,
        otherProficienciesAndLanguages: Array.isArray(
          createCharacterDto.otherProficienciesAndLanguages,
        )
          ? createCharacterDto.otherProficienciesAndLanguages
          : [createCharacterDto.otherProficienciesAndLanguages],
        equipment: Array.isArray(createCharacterDto.equipment)
          ? createCharacterDto.equipment
          : [createCharacterDto.equipment],
        spells: Array.isArray(createCharacterDto.spells)
          ? createCharacterDto.spells
          : [createCharacterDto.spells],
      };

      return await this.prisma.character.create({ data: characterData });
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
      UpdateCharacterSchema.parse(updateCharacterDto);

      const characterData = {
        ...updateCharacterDto,
        userId: updateCharacterDto.userId || '',
        otherProficienciesAndLanguages: Array.isArray(
          updateCharacterDto.otherProficienciesAndLanguages,
        )
          ? updateCharacterDto.otherProficienciesAndLanguages.filter(
              (item): item is string => !!item,
            )
          : [updateCharacterDto.otherProficienciesAndLanguages].filter(
              (item): item is string => !!item,
            ),
        equipment: Array.isArray(updateCharacterDto.equipment)
          ? updateCharacterDto.equipment.filter(
              (item): item is string => !!item,
            )
          : [updateCharacterDto.equipment].filter(
              (item): item is string => !!item,
            ),
        spells: Array.isArray(updateCharacterDto.spells)
          ? updateCharacterDto.spells.filter((item): item is string => !!item)
          : [updateCharacterDto.spells].filter(
              (item): item is string => !!item,
            ),
      };
      return await this.prisma.character.update({
        where: { id },
        data: characterData,
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
