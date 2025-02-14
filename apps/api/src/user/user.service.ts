import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const { password, ...rest } = createUserDto;
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return this.prisma.user.create({ data: { ...rest, password: hash } });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email: email },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const { name, email, password, isAdmin } = updateUserDto;
    return this.prisma.user.update({
      where: { id },
      data: { name, email, password, isAdmin },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
