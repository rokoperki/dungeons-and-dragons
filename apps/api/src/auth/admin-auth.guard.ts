import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { AuthGuard } from './auth.guard';

@Injectable()
export class AdminAuthGuard extends AuthGuard implements CanActivate {
  constructor(jwtService: JwtService) {
    super(jwtService);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const canActivate = await super.canActivate(context);
    if (!canActivate) {
      return false;
    }

    const request: Request = context.switchToHttp().getRequest();

    const user = request['user'] as { isAdmin: boolean };

    if (user && user.isAdmin === true) {
      return true;
    } else {
      throw new UnauthorizedException('Admin privileges required');
    }
  }
}
