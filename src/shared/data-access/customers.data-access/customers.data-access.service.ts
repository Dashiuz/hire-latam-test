import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from 'src/shared/interfaces';
import { CreateCustomerDto } from 'src/shared/dtos';

@Injectable()
export class CustomersDataAccessService {
  constructor(
    @InjectModel('customers') private customerModel: Model<Customer>,
  ) {}

  async create(customer: CreateCustomerDto) {
    try {
      const createdCustomer = new this.customerModel(customer);
      return createdCustomer.save();
    } catch (err) {}
  }

  async findAll() {
    try {
      return await this.customerModel.find();
    } catch (err) {}
  }

  async findOneById(id: string) {
    try {
      return await this.customerModel.findById(id);
    } catch (err) {}
  }

  async findOneByEmail(email: string) {
    try {
      return await this.customerModel.findOne({ email });
    } catch (err) {}
  }

  async findOneByIdNumber(id_number: string) {
    try {
      return await this.customerModel.findOne({ id_number });
    } catch (err) {}
  }

  async update(id: string, customer: any) {
    try {
      return await this.customerModel.findByIdAndUpdate(id, customer, {
        new: true,
      });
    } catch (err) {}
  }

  async remove(id: string) {
    try {
      return await this.customerModel.findByIdAndDelete(id);
    } catch (err) {}
  }
}
