import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PoliciesDataAccessService } from './policies.data-access.service';
import { Customerchema } from 'src/shared/schema-models/customers.model';
import { PoliciesSchema } from 'src/shared/schema-models/policies.model';
import { CustomerPolicieschema } from 'src/shared/schema-models/customer-policies.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'customers', schema: Customerchema },
      { name: 'policies', schema: PoliciesSchema },
      { name: 'customerPolicies', schema: CustomerPolicieschema },
    ]),
  ],
  providers: [PoliciesDataAccessService],
})
export class PoliciesDataAccessModule {}
