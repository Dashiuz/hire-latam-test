import { Document } from 'mongoose';
import { ClaimReason, ClaimStatus } from 'src/shared/enums';

export interface Claim extends Document {
  claim_id: string;
  customer_id: string;
  claim_date: Date;
  claim_type: ClaimReason;
  claim_description: string;
  claim_status: ClaimStatus;
}
