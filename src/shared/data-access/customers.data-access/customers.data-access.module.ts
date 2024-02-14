import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersDataAccessService } from './customers.data-access.service';
import { Customerchema } from 'src/shared/schema-models/customers.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'customers', schema: Customerchema }]),
  ],
  providers: [CustomersDataAccessService],
})
export class CustomersDataAccessModule {}
