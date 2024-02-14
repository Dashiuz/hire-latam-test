import { Injectable } from '@nestjs/common';
import { CustomersDataAccessService } from 'src/shared/data-access';

@Injectable()
export class CustomersService {
  constructor(private customersDataAccess: CustomersDataAccessService) {}

  async create(customer) {}

  async findAll() {
    return await this.customersDataAccess.findAll();
  }

  async findOne(id: string) {
    return await this.customersDataAccess.findOneById(id);
  }

  async update(id: string, customer) {
    return this.customersDataAccess
      .findOneById(id)
      .then(() => this.customersDataAccess.update(id, customer));
  }

  async remove(id: string) {
    return await this.customersDataAccess.remove(id);
  }
}
