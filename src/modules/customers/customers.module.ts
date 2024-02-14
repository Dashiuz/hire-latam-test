import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import {
  CustomersDataAccessModule,
  CustomersDataAccessService,
} from 'src/shared/data-access';
import { Customerchema } from 'src/shared/schema-models/customers.model';

@Module({
  imports: [
    CustomersDataAccessModule,
    MongooseModule.forFeature([{ name: 'customers', schema: Customerchema }]),
  ],
  controllers: [CustomersController],
  providers: [CustomersService, CustomersDataAccessService],
  exports: [CustomersService],
})
export class CustomersModule {}
