import { Injectable } from '@nestjs/common';
import { ClaimsDataAccessService } from 'src/shared/data-access';

@Injectable()
export class ClaimsService {
  constructor(private claimsDataAccess: ClaimsDataAccessService) {}

  async create(claim) {}

  async findAll() {
    return await this.claimsDataAccess.findAll();
  }

  async findOne(id: string) {
    return await this.claimsDataAccess.findOneById(id);
  }

  async update(id: string, claim) {
    return this.claimsDataAccess
      .findOneById(id)
      .then(() => this.claimsDataAccess.update(id, claim));
  }

  async remove(id: string) {
    return await this.claimsDataAccess.remove(id);
  }
}
