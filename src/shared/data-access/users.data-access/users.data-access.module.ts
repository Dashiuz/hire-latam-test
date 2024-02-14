import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersDataAccessService } from './users.data-access.service';
import { UserSchema } from 'src/shared/schema-models/users.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
  providers: [UsersDataAccessService],
})
export class UsersDataAccessModule {}
