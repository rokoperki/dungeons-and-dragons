import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.userService.findByEmail(email);
    if (!user || !(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email, isAdmin: user.isAdmin };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(
    email: string,
    password: string,
    isAdmin: boolean,
    name: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.create({
      email,
      password,
      isAdmin,
      name,
    });
    const payload = { sub: user.id, email: user.email, isAdmin: user.isAdmin };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
