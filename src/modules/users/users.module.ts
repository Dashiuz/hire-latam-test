import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {
  UsersDataAccessModule,
  UsersDataAccessService,
} from 'src/shared/data-access';
import { UserSchema } from 'src/shared/schema-models/users.model';

@Module({
  imports: [
    UsersDataAccessModule,
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema }]),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('api.secret'),
        signOptions: {
          expiresIn: configService.get('api.expiresIn'),
        },
      }),
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersDataAccessService],
})
export class UsersModule {}
