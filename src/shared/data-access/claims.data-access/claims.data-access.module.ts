import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClaimsDataAccessService } from './claims.data-access.service';
import { ClaimSchema } from 'src/shared/schema-models/claims.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'claims', schema: ClaimSchema }]),
  ],
  providers: [ClaimsDataAccessService],
})
export class ClaimsDataAccessModule {}
