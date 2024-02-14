import { Document } from 'mongoose';
import { PolicyTypes, PolicyStatus } from 'src/shared/enums';

export interface Policies extends Document {
  policy_type: PolicyTypes;
  policy_status?: PolicyStatus;
  customer_id?: string;
  policy_contract_id?: string;
  started_date?: string;
  expires_in?: string;
}
