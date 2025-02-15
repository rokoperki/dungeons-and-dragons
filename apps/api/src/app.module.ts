import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CharacterModule } from './character/character.module';

@Module({
  imports: [UserModule, AuthModule, CharacterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
