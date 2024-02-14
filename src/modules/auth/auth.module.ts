import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {
  UsersDataAccessModule,
  UsersDataAccessService,
} from 'src/shared/data-access';
import { JwtStrategy } from 'src/shared/strategies';
import { UserSchema } from 'src/shared/schema-models/users.model';

@Module({
  imports: [
    UsersDataAccessModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('api.secret'),
        signOptions: {
          expiresIn: configService.get('api.expiresIn'),
        },
      }),
    }),
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UsersDataAccessService],
  exports: [AuthService],
})
export class AuthModule {}
