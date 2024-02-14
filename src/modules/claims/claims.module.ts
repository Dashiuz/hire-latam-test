import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClaimsService } from './claims.service';
import { ClaimsController } from './claims.controller';
import {
  ClaimsDataAccessModule,
  ClaimsDataAccessService,
} from 'src/shared/data-access';
import { ClaimSchema } from 'src/shared/schema-models/claims.model';

@Module({
  imports: [
    ClaimsDataAccessModule,
    MongooseModule.forFeature([{ name: 'claims', schema: ClaimSchema }]),
  ],
  controllers: [ClaimsController],
  providers: [ClaimsService, ClaimsDataAccessService],
  exports: [ClaimsService],
})
export class ClaimsModule {}
