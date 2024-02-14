import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ClaimReason, ClaimStatus } from '../enums';
import { Base } from './base.model';

export type ClaimDocument = HydratedDocument<Claim>;

@Schema()
export class Claim extends Base {
  @Prop({ required: true })
  claim_id: string;

  @Prop({ required: true })
  customer_id: string;

  @Prop({ required: true })
  claim_date: Date;

  @Prop({ required: true })
  claim_type: ClaimReason;

  @Prop({ required: true })
  claim_description: string;

  @Prop()
  claim_status: ClaimStatus;
}

export const ClaimSchema = SchemaFactory.createForClass(Claim);
